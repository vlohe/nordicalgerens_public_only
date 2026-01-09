export function QualitySection() {
  return (
    <div className="bg-white/80 backdrop-blur py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Kvalitet i top
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Som kunde hos Nordic Algerens, sikre vi dig den bedste kvalitet af vores behandlinger – din personlige alge partner.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Miljø godkendt:
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Vi sætter stor fokus på miljøet, og anvender udelukkende miljøgodkendte produkter.
            </p>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Hurtig service:
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Hos os kan du nemt få et skarpt tilbud, som er 100% uforpligtende. Vi sørger for det passer netop til dig
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
