export function CompanyImage() {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
            alt="Company Office"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Transform Your Business with Basil Consulting</h2>
            <p className="text-lg max-w-2xl">
              Partner with us to unlock your organization's full potential through innovative solutions and strategic guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}