interface InputNumberValueProps {
  label: string;
  value: number;
  onValueChange: React.Dispatch<React.SetStateAction<number>>;
}

const InputNumberValue = ({
  label,
  value,
  onValueChange,
}: InputNumberValueProps) => {
  return (
    <div className="flex flex-col text-center bg-violet-900 rounded">
      <p className="text-2xl text-white p-2">{label}</p>
      <input
        className="text-2xl text-center rounded-b"
        name={label}
        type="number"
        value={value}
        onChange={(e) =>
          onValueChange(parseInt(e.target.value ? e.target.value : "0"))
        }
      />
    </div>
  );
};

export default InputNumberValue;
