import { Button, Form, Input, message } from 'antd'
import { contactSchema } from '@/validations/contactSchema';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "@/styles/pages/contact.module.scss";

type ContactForm = yup.InferType<typeof contactSchema>;

const { TextArea } = Input;
function ContactForm() {

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: yupResolver(contactSchema),
    mode: "onChange",
  });

  const onSubmit = async (values: ContactForm) => {
    try {
      console.log("Form Values:", values);
      message.success("Your message has been sent successfully!");
      reset();
    } catch (err) {
      message.error("Something went wrong, please try again later.");
    }
  };
  return (
    <Form
      layout="vertical"
      onFinish={handleSubmit(onSubmit)}
      className={styles.form}
      variant="filled"
    >
      <div className={styles.inputGroup}>
       
        <Form.Item
          label="Your Name"
          validateStatus={errors.name ? "error" : ""}
          help={errors.name?.message}
        >
         <Input
            {...control.register("name")}
            size="large"
            placeholder="Your Name *"
          />
        </Form.Item>

        {/* Email */}
        <Form.Item
          label="Your Email"
          validateStatus={errors.email ? "error" : ""}
          help={errors.email?.message}
        >
          <Input
            {...control.register("email")}
            size="large"
            placeholder="Your Email *"
          />
        </Form.Item>

        {/* Phone */}
        <Form.Item
          label="Your Phone"
          validateStatus={errors.phone ? "error" : ""}
          help={errors.phone?.message}
        >
          <Input
            {...control.register("phone")}
            size="large"
            placeholder="Your Phone *"
          />
        </Form.Item>
      </div>

      {/* Message */}
      <Form.Item
        label="Message"
        validateStatus={errors.message ? "error" : ""}
        help={errors.message?.message}
      >
        <TextArea
          {...control.register("message")}
          rows={4}
          style={{padding:"10px"}}
          placeholder="Your Message *"
        />
      </Form.Item>

      {/* Submit */}
      <Form.Item style={{ textAlign: "right" }}>
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          loading={isSubmitting}
          className={styles.submitBtn}
        >
          Send Message
        </Button>
      </Form.Item>
    </Form>
  )
}

export default ContactForm
