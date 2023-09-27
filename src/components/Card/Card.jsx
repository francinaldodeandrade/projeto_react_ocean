import "../Card/style.css";

export default function Card(props) {
  const item = props.item;
  return (
    <div className="box">
      <h2>{item.nome}</h2>

      <div className="tags">
        <div className="box-label">
          <label className="label-tag" htmlFor="tag1">
            Status
          </label>
          <div className="tag" id="tag1">
            Vivo
          </div>
        </div>

        <div className="box-label">
          <label className="label-tag" htmlFor="tag2">
            Especie
          </label>
          <div className="tag" id="tag2">
            Humana
          </div>
        </div>

        <div className="box-label">
          <label className="label-tag" htmlFor="tag3">
            Origem
          </label>
          <div className="tag" id="tag3">
            Terra C-137
          </div>
        </div>
      </div>

      <img src={item.url_img} />
    </div>
  );
}
