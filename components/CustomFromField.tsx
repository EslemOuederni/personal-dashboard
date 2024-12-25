import { FormFieldType } from "@/app/types";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import { Control } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
interface CustomProps {
  control: Control<any>;
  fieldType: FormFieldType;
  label?: string;
  name: string;
  placeholder?: string;
  description?: string;
  required?: boolean;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
}

const RenderField = ({ field, props }: { field: any; props: CustomProps }) => {
  switch (props.fieldType) {
    case FormFieldType.INPUT:
      return (
        <FormControl>
          <Input placeholder={props.placeholder} {...field} />
        </FormControl>
      );
    case FormFieldType.Date_PICKER: {
      return (
        <div className="flex ">
          <FormControl>
            <DatePicker
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              dateFormat={props.dateFormat ?? "dd/MM/yyyy"}
              showTimeSelect={props.showTimeSelect ?? false}
              timeInputLabel="Time:"
              wrapperClassName="w-full"
              className="block w-full border-y border-l rounded-l-md p-2  "
            />
          </FormControl>
          <Image
            src="/assets/icons/Calendar-Search.svg"
            alt="calendar"
            width={20}
            height={20}
            className="border-y border-r rounded-r-md  "
          />
        </div>
      );
    }
  }
};

const CustomFromField = (props: CustomProps) => {
  const { control, name, fieldType, label } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className=" flex-1">
          {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel>{label}</FormLabel>
          )}
          <RenderField field={field} props={props} />
        </FormItem>
      )}
    />
  );
};

export default CustomFromField;
