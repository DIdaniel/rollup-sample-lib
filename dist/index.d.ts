declare type CustomInputProps = {
    value: number;
};
declare const CustomInput: (props: CustomInputProps) => JSX.Element;

declare type CustomButtonProps = {
    handleIncrement: () => void;
    handleDecrement: () => void;
};
declare const CustomButton: (props: CustomButtonProps) => JSX.Element;

declare const _default: () => JSX.Element;

export { _default as App, CustomButton, CustomInput };
