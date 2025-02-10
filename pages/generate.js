import { useState } from "react";

export default function Generate() {
  const [assetNumber, setAssetNumber] = useState("");
  const [imageUrl, setImageUrl] = useState(null);

  //   const fetchDogImage = async () => {
  //     console.log(`Fetching image for asset number: ${assetNumber}`);

  //     // simulate fetching a dog
  //     setDogImage("/placeholder-dog.png"); // TODO: Replace with actual API call
  //   };

  const fetchDogImage = () => {
    const url = `https://turquoise-similar-urial-415.mypinata.cloud/ipfs/QmTydYkd37dU3evctzX3oZGeE5NqDaX5GpdkGgThySV2e1/Doginal Dog ${assetNumber}.png`;
    setImageUrl(url);
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>DD Studio Generator</h1>
      <p>Enter your 4-digit Doginal Dog asset number to get started. </p>
      <input
        type="text"
        placeholder="Enter asset #"
        value={assetNumber}
        onChange={(e) => setAssetNumber(e.target.value)}
        style={{ padding: "0.5rem", fontSize: "1rem", marginRight: "1rem" }}
      />
      <button
        onClick={fetchDogImage}
        style={{ padding: "0.5rem 1rem", fontSize: "1rem" }}
      >
        Fetch Dog
      </button>
      {imageUrl && (
        <div style={{ marginTop: "2rem" }}>
          <h2>Preview</h2>
          <img
            src={imageUrl}
            alt={`Doginal Dog ${assetNumber}`}
            style={{ maxWidth: "300px" }}
          />
        </div>
      )}
    </div>
  );
}
