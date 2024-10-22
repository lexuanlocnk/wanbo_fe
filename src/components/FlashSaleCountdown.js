import React, { useState, useEffect } from "react";

const FlashSaleCountdown = () => {
  // State để lưu thời gian còn lại
  const [timeLeft, setTimeLeft] = useState({});

  // Hàm để tính toán thời gian đếm ngược
  const calculateTimeLeft = () => {
    const saleEndTime = new Date("2025-02-13T12:06:00").getTime(); // Thời gian kết thúc
    const now = new Date().getTime();
    const difference = saleEndTime - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  useEffect(() => {
    // Cập nhật đồng hồ đếm ngược mỗi giây
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Dọn dẹp timer khi component bị huỷ
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flash-sale-countdown">
      <div className="countdown-timer p-1 " style={{fontSize: 14}}>
        <span><b><i className="bi bi-alarm me-1"/> Kết thúc sau: </b> </span>
        <span><b>{timeLeft.days}</b> ngày</span> :{" "}
        <span><b>{timeLeft.hours}</b> giờ</span> :{" "}
        <span><b>{timeLeft.minutes}</b> phút</span> :{" "}
        <span><b>{timeLeft.seconds}</b> giây</span>
      </div>
    </div>
  );
};

export default FlashSaleCountdown;
