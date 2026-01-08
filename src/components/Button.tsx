type ButtonProps = {
    children: React.ReactNode;
    href?: string;
  };
  
  export default function Button({ children, href }: ButtonProps) {
    const styles = {
      padding: "12px 24px",
      borderRadius: 8,
      fontWeight: 600,
      display: "inline-block",
    };
  
    if (href) {
      return (
        <a href={href} className="premium-gradient glow-effect" style={styles}>
          {children}
        </a>
      );
    }
  
    return (
      <button className="premium-gradient glow-effect" style={styles}>
        {children}
      </button>
    );
  }
  