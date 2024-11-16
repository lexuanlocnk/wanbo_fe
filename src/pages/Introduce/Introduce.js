import React, { useEffect, useState } from "react";

const Introduce = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchIntroduceData = async () => {
      try {
        const response = await fetch("http://192.168.245.190:8002/api/member/detail-about/gioi-thieu-ve-cong-ty");
        const result = await response.json();

        if (result.status) {
          // Set the description from API response to the content state
          setContent(result.data.description);
        }
      } catch (error) {
        console.error("Error fetching introduce data:", error);
      }
    };

    fetchIntroduceData();
  }, []);

  return (
    <div className="container">
      <h3>Giới thiệu</h3>
      {/* Render HTML content from API response */}
      <div style={{ fontSize: 16 }} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default Introduce;

