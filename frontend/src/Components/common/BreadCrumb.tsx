import { Breadcrumb } from "antd";
import { Link } from "react-router";
import styles from "@/styles/components/common/breadcrumbs.module.scss";

type Chain = {
  title: string;
  path?: string;
}


function Breadcrumbs ({chain}:{chain:Chain[]}) {

  return (
    <div className={styles.breadcrumbWrapper}>
      <Breadcrumb items={chain}  />
           
    </div>
  );
};

export default Breadcrumbs;
