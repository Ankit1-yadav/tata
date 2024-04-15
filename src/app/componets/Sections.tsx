"use client"
import React, { useEffect } from 'react';
import $ from 'jquery';
import 'owl.carousel';


const Sections: React.FC = () => {
  useEffect(() => {
    const $owl = $('.owl-carousel');
    $owl.children().each(function (index) {
      $(this).attr('data-position', index);
    });

    $owl.owlCarousel({
      center: true,
      loop: true,
      items: 5,
    });

    $(document).on('click', '.owl-item>div', function () {
      const $speed = 300;
      $owl.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
    });

    return () => {
      $owl.trigger('destroy.owl.carousel').removeClass('owl-loaded');
      $('.owl-stage-outer').children().unwrap();
    };
  }, []);

  
  return (
    <section className='bg-blue-500'>
      <div className="container pt-10">
        <h2 className="text-center text-white">TATA STRUCTURA SECTIONS</h2>
        <div className="container">
        <div className="owl-carousel">
          <div><img src="/images/image1.jpg" alt="Image 1" />1</div>
          <div><img src="/images/image2.jpg" alt="Image 2" />2</div>
          <div><img src="/images/image3.jpg" alt="Image 3" />3</div>
          {/* Add more images here */}
        </div>
    </div>

      </div>
    </section>
  )
}

export default Sections
