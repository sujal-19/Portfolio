import { clientReviews } from '../constants/index.js';

const Clients = () => {
  return (
    <section className="c-space my-20">
      <h3 className="head-text">Skills and Expertise</h3>

      <div className="client-container">
        {clientReviews.map((item) => (
          <div key={`review-${item.id}`} className="client-review">
            <div>
              <div className="client-content">
                <div className="flex gap-3">
                  <img src={item.img} alt="reviewer" className="w-12 h-12
                  rounded-full" />
                  <div className="flex flex-col">
                    <p className="font-semibold w-10 text-white-800">{item.name}</p>
                  </div>
                </div>
              </div>
              <p className="text-white-800 font-light">{item.review}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
