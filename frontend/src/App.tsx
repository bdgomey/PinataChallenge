import { useState } from "react";
import { pinata } from "./utils/config"
import { Colors } from "react-native/Libraries/NewAppScreen";

function App() {
  const [selectedFiles, setSelectedFiles]: any = useState();
  const [url, setUrl]: any = useState();
  const changeHandler = (event: any) => {
    setSelectedFiles(event.target.files);
  };

  const handleSubmission = async () => {
    try {
      const upload = await pinata.upload.file(selectedFiles[0])
      console.log(upload);

      const signed_url = await pinata.gateways.createSignedURL({
        cid: upload.cid,
        expires: 30
      })
      setUrl(signed_url)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <label className="form-label"> Choose File</label>
      <input
        type="file"
        onChange={changeHandler}
      />
      <button onClick={handleSubmission} style={{color: 'red', borderRadius: 50, borderColor: 'black'}}>Submit</button>
      {url && (
        <img
          src={url}
          alt="uploaded image"
        />
      )}
    </>
  );
}

export default App;
