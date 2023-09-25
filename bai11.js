const express = require('express');
const axios = require('axios');

const bai11 = express();
const PORT = 3000;

// Route GET /convert/:amount
bai11.get('/convert/:amount', async (req, res) => {
  const { amount } = req.params;
  const from = 'VND'; // Đơn vị ngoại tệ ban đầu
  const to = 'USD'; // Đơn vị ngoại tệ muốn chuyển đổi

  try {
    // Gọi API để lấy tỷ giá chuyển đổi
    const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
    const exchangeRates = response.data.rates;

    // Kiểm tra xem đơn vị ngoại tệ có tồn tại trong API hay không
    if (!exchangeRates.hasOwnProperty(from) || !exchangeRates.hasOwnProperty(to)) {
      return res.status(400).json({ error: 'Đơn vị ngoại tệ không hợp lệ.' });
    }

    // Thực hiện chuyển đổi ngoại tệ
    const result = (amount / exchangeRates[from]) * exchangeRates[to];

    // Trả về kết quả
    res.json({ result });
  } catch (error) {
    console.error('Đã xảy ra lỗi:', error);
    res.status(500).json({ error: 'Đã xảy ra lỗi trong quá trình chuyển đổi ngoại tệ.' });
  }
});

// Khởi động server
bai11.listen(PORT, () => {
  console.log(`Server đang lắng nghe tại cổng ${PORT}`);
});