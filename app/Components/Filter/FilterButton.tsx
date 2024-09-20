import * as RadioGroup from "@radix-ui/react-radio-group";

interface Props {
  children: string;
  htmlFor: string;
  value: string;
  checked?: boolean;
}

const FilterButton = (props: Props) => {
  const { children, htmlFor, value, checked } = props;
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <RadioGroup.Item className="RadioGroupItem" value={value} id={htmlFor}>
        <RadioGroup.Indicator className="RadioGroupIndicator" />
      </RadioGroup.Item>
      <label className="Label" htmlFor={htmlFor}>
        {children}
      </label>
    </div>
  );
};

export { FilterButton };
