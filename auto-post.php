<?php
// ================= CONFIG =================
$wp_url = "https://domainkamu.com";
$wp_user = "USERNAME_WP";
$wp_app_pass = "APP_PASSWORD";
$openai_key = "OPENAI_API_KEY";

// =========================================

// Prompt konten
$prompt = "Buat artikel SEO 800 kata tentang prediksi bola hari ini, lengkap dengan heading dan kesimpulan.";

// === GENERATE KONTEN AI ===
$data = [
    "model" => "gpt-4o-mini",
    "messages" => [
        ["role" => "system", "content" => "Kamu adalah penulis artikel SEO profesional"],
        ["role" => "user", "content" => $prompt]
    ]
];

$ch = curl_init("https://api.openai.com/v1/chat/completions");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => [
        "Authorization: Bearer $openai_key",
        "Content-Type: application/json"
    ],
    CURLOPT_POSTFIELDS => json_encode($data)
]);

$response = curl_exec($ch);
curl_close($ch);

$content = json_decode($response, true)['choices'][0]['message']['content'];

// === POST KE WORDPRESS ===
$post_data = [
    "title"   => "Prediksi Bola Hari Ini " . date("d F Y"),
    "content" => $content,
    "status"  => "publish"
];

$ch = curl_init("$wp_url/wp-json/wp/v2/posts");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_USERPWD => "$wp_user:$wp_app_pass",
    CURLOPT_HTTPHEADER => ["Content-Type: application/json"],
    CURLOPT_POSTFIELDS => json_encode($post_data)
]);

$result = curl_exec($ch);
curl_close($ch);

echo "Auto post sukses!";
