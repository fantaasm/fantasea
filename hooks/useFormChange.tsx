import { useState } from "react";

export function useFormFields(options: { initialValues: any; onSubmit?: () => void }) {
  const [fields, setFields] = useState(options.initialValues);
  // const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    // if (event.target[0].value  !== "") {
    //   event.preventDefault();
    //   await router.push("/error");
    //   return;
    // }

    // sanity check
    for (const key in fields) {
      if (fields.hasOwnProperty(key)) {
        const value = fields[key];
        if (typeof value === "string") {
          fields[key] = value.trim(); // trim whitespace
        }
      }
    }

    if (options.onSubmit) {
      options.onSubmit();
    }
  }

  function handleInputChange(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    const { name, value } = event.currentTarget;
    setFields((fields: any) => ({ ...fields, [name]: value }));
  }

  return {
    fields,
    handleSubmit,
    handleInputChange,
  };
}
