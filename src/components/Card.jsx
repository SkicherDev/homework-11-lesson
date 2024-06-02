function Card(props) {
  return (
    <>
      <div className="card bg-white text-black shadow-xl w-[305px] h-[322px]">
        <div className="card-body">
          <h2 className="card-title">{props.name}</h2>
          <hr />
          <div className="flex gap-5 mt-4">
            <span>
              <img src={props.data} width={160} height={130} alt="slack" />
            </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              nobis, cumque voluptatem incidunt
            </p>
          </div>
          <div className="flex justify-end mt-6">
            <input type="checkbox" className="toggle toggle-success" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
