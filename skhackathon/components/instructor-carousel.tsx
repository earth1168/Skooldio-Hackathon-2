const InstructorCarousel = () => {
  const instructors = ['apirak-p', 'sutham-t', 'busaya-k'];
  return (
    <section>
      <div className="flex flex-col justify-center text-white text-center px-4">
        <h1 className="typo-h1">
          แต่ตาวิเศษก็เห็นนะว่า
          <br />
          จอมเวทยังพัฒนาได้อีกไกล
        </h1>
        <p className="typo-p px-4 my-4">
          สำนัก SKOOLDIO แห่งนี้ <br />
          พร้อมส่ง เหล่าเทพผู้ยิ่งใหญ่ ไปสนับสนุน
          <br />
          ให้จอมเวทย์ อย่างคุณเก่งกว่าเดิม
        </p>
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
