interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

interface ButtonProps extends TypographyProps {
  backgroundColor?: string;
  textColor?: string;
  onClick?: () => void;
  href?: string;
  fullWidth?: boolean;
  hoverBackroundColor?: string;
  hoverTextColor?: string;
}

export const Title = ({ children, className }: TypographyProps) => {
  return <h1 className={`text-[3rem] font-bold ${className}`}>{children}</h1>;
};

export const H1 = ({ children, className }: TypographyProps) => {
  return (
    <h1 className={`text-[2rem] font-semibold ${className}`}>{children}</h1>
  );
};

export const H2 = ({ children, className }: TypographyProps) => {
  return (
    <h2 className={`text-[1.5rem] font-semibold ${className}`}>{children}</h2>
  );
};

export const P = ({ children, className }: TypographyProps) => {
  return <p className={`text-[1rem] font-normal ${className}`}>{children}</p>;
};

export const Span = ({ children, className }: TypographyProps) => {
  return (
    <span className={`text-[0.75rem] font-thin ${className}`}>{children}</span>
  );
};

export const Button = ({
  children,
  className,
  fullWidth,
  onClick,
  backgroundColor,
  href,
  textColor,
  hoverBackroundColor,
  hoverTextColor,
}: ButtonProps) => {
  if (href) {
    return (
      <a
        href={href}
        className={`text-[1rem] text-center text-[${textColor}] rounded py-2 px-6 font-normal bg-[#${backgroundColor}] hover:bg-[${hoverBackroundColor}] hover:text-[${hoverTextColor}] ${
          fullWidth && "w-full"
        } ${className}`}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      onClick={() => onClick && onClick()}
      className={`text-[1rem] text-center rounded py-2 px-6 font-normal ${
        fullWidth && "w-full" } ${className}`}
    >
      {children}
    </button>
  );
};
