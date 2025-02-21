import dogImage from "../../public/dog.png";

function FaceMasher() {
  return (
    <div
      className="text-light container rounded-3 p-3"
      style={{ backgroundColor: "#121927" }}
    >
      <div className="text-center px-auto fw-light fs-4">
        Welcome to FaceMash!
      </div>
      <div className="d-flex justify-content-around p-5">
        <img
          src={dogImage}
          style={{ width: "16rem" }}
          className="card-img-top rounded-1"
          alt="Image 1"
        />
        <h1 className="my-auto">VS</h1>
        <img
          src={dogImage}
          style={{ width: "16rem" }}
          className="card-img-top rounded-1"
          alt="Image 1"
        />
      </div>
    </div>
  );
}

export default FaceMasher;
