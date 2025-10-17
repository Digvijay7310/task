<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Stylish Dots Loader</title>
  <style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background: #f0f0f0;
    }

    .loader {
      display: flex;
      align-items: flex-end;
      height: 40px;
      gap: 8px;
    }

    .dot {
      width: 12px;
      height: 12px;
      background-color: #3498db;
      border-radius: 50%;
      animation: bounce 0.6s infinite ease-in-out;
    }

    .dot:nth-child(2) {
      animation-delay: 0.1s;
    }

    .dot:nth-child(3) {
      animation-delay: 0.2s;
    }

    @keyframes bounce {
      0%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-15px);
      }
    }
  </style>
</head>
<body>
  <div class="loader">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Three Dots Animation</title>
  <style>
    .dots-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .dot {
      width: 10px;
      height: 10px;
      margin: 0 5px;
      background-color: #333;
      border-radius: 50%;
      animation: pulse 1s infinite ease-in-out;
    }

    .dot:nth-child(2) {
      animation-delay: 0.2s;
    }

    .dot:nth-child(3) {
      animation-delay: 0.4s;
    }

    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
        opacity: 0.6;
      }
      50% {
        transform: scale(1.5);
        opacity: 1;
      }
    }
  </style>
</head>
<body>
  <div class="dots-container">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Modern Dots Loader</title>
  <style>
    body {
      background-color: #f8f9fa;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .dot-loader {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
    }

    .dot-loader span {
      width: 10px;
      height: 10px;
      background-color: #555;
      border-radius: 50%;
      animation: blink 1.4s infinite both;
    }

    .dot-loader span:nth-child(2) {
      animation-delay: 0.2s;
    }

    .dot-loader span:nth-child(3) {
      animation-delay: 0.4s;
    }

    @keyframes blink {
      0%, 80%, 100% {
        opacity: 0.2;
        transform: scale(1);
      }
      40% {
        opacity: 1;
        transform: scale(1.4);
      }
    }
  </style>
</head>
<body>
  <div class="dot-loader">
    <span></span>
    <span></span>
    <span></span>
  </div>
</body>
</html>
