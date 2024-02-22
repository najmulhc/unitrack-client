interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer = ({ children }: PageContainerProps) => {
  return <div className="min-h-screen bg-[#141218] p-4">{children}</div>;
};

export default PageContainer;
