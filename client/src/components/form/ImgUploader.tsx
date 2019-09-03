import React from "react";

export default function ImgUploader() {
  return (
    <div className="col-md-6">
      <div className="form-group">
        <label>Upload Image</label>
        <span className="btn-default btn-file">
          <input type="file" id="imgInp" />
        </span>

        <img id="img-upload" />
      </div>
    </div>
  );
}
