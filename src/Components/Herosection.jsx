const Herosection = () => {
  return (
    <div>
        <div className="w-full bg-cover bg-center p-8 shadow-xl text-center" style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('images/banana-farm.jpg')"
        }} >
          <h1 className="text-5xl font-bold text-green-100 wrap-break-word text-shadow-md text-shadow-black/80">
            रामा एग्रीटेक मध्ये आपले सहर्ष स्वागत आहे
          </h1>

          <p className="my-8 text-sm text-green-200 text-shadow-md text-shadow-black/80">
            आधुनिक तंत्रज्ञानाची साथ आणि बळीराजाचा अतूट विश्वास! आम्ही घेऊन आलो आहोत दर्जेदार खते, औषधे आणि योग्य कृषी सल्ला, ज्यामुळे तुमची शेती बनेल अधिक सुपीक आणि फायदेशीर.
          </p>

          <button className="mt-6 rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-blue-700" >
            संपर्क करा
          </button>
        </div>


      </div>

  )
}

export default Herosection
