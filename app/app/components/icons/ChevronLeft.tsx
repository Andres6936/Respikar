import type { Icon } from "~/components/icons/Icon";

export default function ChevronLeft(props: Icon) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size ?? 16}
        height={props.size ?? 16}
        fill="currentColor"
        className={props.className ?? ''}
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
        />
      </svg>
    </div>
  );
}
