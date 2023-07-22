import IDynamicButton from "../DataTypes/iDynamicButton";

export default function DynmaicButton({
  Text,
  Icon,
  Styling,
  onclick = () => {},
}: IDynamicButton) {
  return (
    <>
      <div
        className="root_button_container"
        style={Styling}
        onClick={() => onclick()}
      >
        {Icon && (
          <div className="icon_container">
            <Icon />
          </div>
        )}
        <div>{Text}</div>
      </div>
    </>
  );
}
