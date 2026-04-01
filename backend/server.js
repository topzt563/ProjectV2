const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const staticDir = path.join(__dirname, '..', 'frontend');

app.use(express.json());
app.use(express.static(staticDir));

app.get('/api/status', (req, res) => {
  res.json({
    status: 'ok',
    service: 'GitVisual.TH backend',
    time: new Date().toISOString()
  });
});

app.get('/api/outline', (req, res) => {
  res.json({
    title: 'GitVisual.TH Course Outline',
    lessons: [
      { id: 1, title: 'พื้นฐานระบบควบคุมเวอร์ชัน', description: 'Init, Add, Commit และแนวทางการใช้งาน Git เบื้องต้น' },
      { id: 2, title: 'Branching', description: 'จัดการสาขาเพื่อลดข้อผิดพลาดและทำงานร่วมกันเป็นทีม' },
      { id: 3, title: 'Remote Repository', description: 'เชื่อมต่อ GitHub, Push, Pull และ Clone' },
      { id: 4, title: 'Merge Conflict', description: 'แก้ไขข้อขัดแย้งและย้อนสถานะไฟล์อย่างปลอดภัย' }
    ]
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(staticDir, 'pages', 'home.html'));
});

app.listen(PORT, () => {
  console.log(`GitVisual.TH backend listening at http://localhost:${PORT}`);
});
