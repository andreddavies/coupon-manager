import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

type Props = {
  width: number;
  height: number;
  color?: "primary" | "secondary" | "tertiary" | "urgent" | "default";
};

const SettingIcon = ({
  width,
  height,
  color = "default",
}: Props): React.ReactElement => {
  const themeContext = useContext(ThemeContext);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.9 12.6599C19.7397 12.4774 19.6513 12.2428 19.6513 11.9999C19.6513 11.757 19.7397 11.5224 19.9 11.3399L21.18 9.89989C21.3211 9.74256 21.4087 9.5446 21.4302 9.3344C21.4518 9.12421 21.4062 8.91258 21.3 8.72989L19.3 5.2699C19.1949 5.08742 19.0349 4.94277 18.8428 4.85658C18.6506 4.77039 18.4362 4.74705 18.23 4.7899L16.35 5.1699C16.1108 5.21932 15.8618 5.17948 15.6499 5.0579C15.438 4.93631 15.278 4.74138 15.2 4.5099L14.59 2.6799C14.5229 2.48127 14.3951 2.30876 14.2246 2.18674C14.0542 2.06471 13.8497 1.99935 13.64 1.9999H9.64002C9.42195 1.98851 9.20615 2.04882 9.02558 2.17161C8.84501 2.2944 8.7096 2.47291 8.64002 2.6799L8.08002 4.5099C8.00202 4.74138 7.84199 4.93631 7.63013 5.0579C7.41827 5.17948 7.16924 5.21932 6.93002 5.1699L5.00002 4.7899C4.80457 4.76228 4.60532 4.79312 4.42737 4.87853C4.24941 4.96395 4.10072 5.10012 4.00002 5.2699L2.00002 8.72989C1.89118 8.91054 1.84224 9.12098 1.8602 9.33112C1.87816 9.54126 1.9621 9.74034 2.10002 9.89989L3.37002 11.3399C3.53034 11.5224 3.61875 11.757 3.61875 11.9999C3.61875 12.2428 3.53034 12.4774 3.37002 12.6599L2.10002 14.0999C1.9621 14.2595 1.87816 14.4585 1.8602 14.6687C1.84224 14.8788 1.89118 15.0892 2.00002 15.2699L4.00002 18.7299C4.10512 18.9124 4.26514 19.057 4.45727 19.1432C4.6494 19.2294 4.86384 19.2527 5.07002 19.2099L6.95002 18.8299C7.18924 18.7805 7.43827 18.8203 7.65013 18.9419C7.86199 19.0635 8.02202 19.2584 8.10002 19.4899L8.71002 21.3199C8.7796 21.5269 8.91501 21.7054 9.09558 21.8282C9.27615 21.951 9.49195 22.0113 9.71002 21.9999H13.71C13.9197 22.0004 14.1242 21.9351 14.2946 21.8131C14.4651 21.691 14.5929 21.5185 14.66 21.3199L15.27 19.4899C15.348 19.2584 15.508 19.0635 15.7199 18.9419C15.9318 18.8203 16.1808 18.7805 16.42 18.8299L18.3 19.2099C18.5062 19.2527 18.7206 19.2294 18.9128 19.1432C19.1049 19.057 19.2649 18.9124 19.37 18.7299L21.37 15.2699C21.4762 15.0872 21.5218 14.8756 21.5002 14.6654C21.4787 14.4552 21.3911 14.2572 21.25 14.0999L19.9 12.6599ZM18.41 13.9999L19.21 14.8999L17.93 17.1199L16.75 16.8799C16.0298 16.7327 15.2806 16.855 14.6446 17.2237C14.0086 17.5924 13.5302 18.1817 13.3 18.8799L12.92 19.9999H10.36L10 18.8599C9.76987 18.1617 9.2914 17.5724 8.65542 17.2037C8.01945 16.835 7.27024 16.7127 6.55002 16.8599L5.37002 17.0999L4.07002 14.8899L4.87002 13.9899C5.36197 13.4399 5.63395 12.7278 5.63395 11.9899C5.63395 11.252 5.36197 10.5399 4.87002 9.98989L4.07002 9.0899L5.35002 6.88989L6.53002 7.1299C7.25024 7.27712 7.99945 7.15478 8.63542 6.78609C9.2714 6.41741 9.74987 5.82805 9.98002 5.1299L10.36 3.9999H12.92L13.3 5.13989C13.5302 5.83805 14.0086 6.42741 14.6446 6.79609C15.2806 7.16478 16.0298 7.28712 16.75 7.13989L17.93 6.8999L19.21 9.11989L18.41 10.0199C17.9236 10.5687 17.655 11.2766 17.655 12.0099C17.655 12.7432 17.9236 13.4511 18.41 13.9999ZM11.64 7.9999C10.8489 7.9999 10.0755 8.23449 9.41774 8.67402C8.75994 9.11354 8.24725 9.73826 7.9445 10.4692C7.64175 11.2001 7.56254 12.0043 7.71688 12.7803C7.87122 13.5562 8.25218 14.2689 8.81159 14.8283C9.371 15.3877 10.0837 15.7687 10.8597 15.923C11.6356 16.0774 12.4398 15.9982 13.1708 15.6954C13.9017 15.3927 14.5264 14.88 14.9659 14.2222C15.4054 13.5644 15.64 12.791 15.64 11.9999C15.64 10.939 15.2186 9.92161 14.4684 9.17147C13.7183 8.42132 12.7009 7.9999 11.64 7.9999ZM11.64 13.9999C11.2445 13.9999 10.8578 13.8826 10.5289 13.6628C10.2 13.4431 9.94363 13.1307 9.79226 12.7653C9.64088 12.3998 9.60128 11.9977 9.67845 11.6097C9.75562 11.2218 9.9461 10.8654 10.2258 10.5857C10.5055 10.306 10.8619 10.1155 11.2498 10.0383C11.6378 9.96115 12.0399 10.0008 12.4054 10.1521C12.7708 10.3035 13.0832 10.5599 13.303 10.8888C13.5227 11.2177 13.64 11.6043 13.64 11.9999C13.64 12.5303 13.4293 13.039 13.0542 13.4141C12.6792 13.7892 12.1705 13.9999 11.64 13.9999Z"
        fill={themeContext.icons[color]}
      />
    </svg>
  );
};

export default SettingIcon;
