export function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      quote:
        'Excellent staff. Excellent care. After the treatment we feel so great. Thanks to Dr David Ikudayisi and his staff for the treatment.',
      author: 'Adesayo Ilesanmi',
    },
    {
      rating: 5,
      quote:
        'Impressive results and professional staff to assist in this journey.',
      author: 'Kathleen Bowman',
    },
    {
      rating: 5,
      quote:
        'Thank you Dr. Dave for insisting I get the supplement stem regen, noticed positive results within four days, after three weeks I feel like a new man. I am so glad I took your advice.',
      author: 'Jon Rentillo',
    },
    {
      rating: 5,
      quote:
        'Amazing customer service. The medical staff are caring, courteous, supportive and knowledgeable. Would recommend to a friend. I had an issue and the medical team worked to help me resolve it.',
      author: 'Cboogie',
    },
    {
      rating: 5,
      quote: 'Dr. Ikudayisi is very thorough and listens to your concerns.',
      author: 'Kristie Reynolds',
    },
    {
      rating: 5,
      quote: 'Very friendly staff. No wait. Very good experience.',
      author: 'Angelo Setta',
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-lg border border-blue-100"
        >
          <div className="flex mb-4 text-yellow-400 text-xl">★★★★★</div>
          <p className="text-gray-700 italic text-lg mb-6 leading-relaxed">
            &quot;{testimonial.quote}&quot;
          </p>
          <p className="font-bold text-gray-900">— {testimonial.author}</p>
        </div>
      ))}
    </div>
  );
}
