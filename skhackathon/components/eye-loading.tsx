const EyeLoading = () => {
  return (
    <section className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="relative">
        <img src="/images/eye.svg" alt="eye" />
        <div className="absolute w-[137px] h-[137px] rounded-full top-[25%] left-[25%] border-[3px] border-white animate-ping" />
        <div className="absolute w-[137px] h-[137px] rounded-full top-[25%] left-[25%] border-[12px] opacity-75 border-white animate-ping" />
      </div>
      <h1 className="typo-h1 text-white">ตาวิเศษเห็นแล้ว!</h1>
    </section>
  );
};

export default EyeLoading;
