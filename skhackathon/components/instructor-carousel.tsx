const InstructorCarousel = () => {
  const instructors = ['apirak-p', 'sutham-t', 'busaya-k'];
  return (
    <section>
      <div className="flex flex-col justify-center text-white text-center mt-20">
        <div className="relative">
          <h1 className="typo-h1 px-4">
            แต่ตาวิเศษก็เห็นนะว่า
            <br />
            จอมเวทยัง<span className="text-orange-400">พัฒนาได้อีกไกล</span>
          </h1>
          <p className="typo-p my-4 px-4">
            สำนัก SKOOLDIO แห่งนี้ <br />
            พร้อมส่ง เหล่าเทพผู้ยิ่งใหญ่ ไปสนับสนุน
            <br />
            ให้จอมเวทย์ อย่างคุณเก่งกว่าเดิม
          </p>
          <img
            className="absolute top-8 left-2"
            src="images/stars-1.svg"
            alt="stars"
          />
        </div>
        <div className="flex overflow-x-scroll snap-x snap-mandatory">
          {instructors.map((instructor) => (
            <img
              className="snap-center"
              key={instructor}
              src={`/images/instructors/${instructor}.svg`}
              alt={instructor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorCarousel;
