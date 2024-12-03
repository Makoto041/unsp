import React, { useState } from "react";
import PropTypes from "prop-types";
/* eslint-disable react/prop-types */
const Results = ({ photo }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null); // 選択された画像
  const [isModalOpen, setModalOpen] = useState(false); // モーダル表示状態
  // モーダルを開く
  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setModalOpen(true);
  };

  // モーダルを閉じる
  const closeModal = () => {
    setSelectedPhoto(null);
    setModalOpen(false);
  };
  return (
    <>
      {/* 画像リスト */}
      <div className="photo-list">
        {photo.map((photos, index) => (
          <div
            key={index}
            className="photo-card"
            onClick={() => openModal(photos.urls.regular)}
          >
            <img
              src={photos.urls.regular}
              alt={photos.alt_description || "Photo"}
              className="photo-image"
            />
            <div className="photo-overlay">
              <p className="photo-title">
                {photos.alt_description || "Untitled"}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* モーダル */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <img src={selectedPhoto} alt="Selected" className="modal-content" />
        </div>
      )}
    </>
  );
};
// PropTypesを使用してpropsの型を定義
Results.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      links: PropTypes.shape({
        html: PropTypes.string.isRequired,
      }),
      urls: PropTypes.shape({
        regular: PropTypes.string.isRequired,
      }),
      alt_description: PropTypes.string,
    })
  ).isRequired,
};

export default Results;
