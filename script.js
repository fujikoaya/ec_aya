$(".slide-items").slick({
    autoplay: true, // 自動再生
    autoplaySpeed: 3000, // 再生速度（ミリ秒設定） 1000ミリ秒=1秒
    infinite: true, // 無限スライド
    cssEase: 'linear',// アニメーション
    speed: 600, // フェードアニメーションの速度設定
    fade: true, // スライドをフェードイン・フェードアウト
  
    arrows: true, // 矢印
    dots: true, // インジケーター
  });
  
  $('.hamburger').on('click', function () {

    $(this).toggleClass('is-active');
    $('#nav').toggleClass('is-active');
  });
  // $('#ham-btn').on('click', function () {
  //   $(this).toggleClass('on');
  // })
  
  
  // $('#ham-btn').on('click', function () {
  //   $('.ham-btn, .nav').toggleClass('show');
  // });
  
  
  $('.tab_box .tab_btn').click(function() {
      var index = $('.tab_box .tab_btn').index(this);
      $('.tab_box .tab_btn, .tab_box .tab_panel').removeClass('active');
      $(this).addClass('active');
      $('.tab_box .tab_panel').eq(index).addClass('active');
  });
  
  // あやのjsはここから
  // ドロップダウン
  $(function () {
    $("ul li").hover(
      function () {
        $("ul:not(:animated)", this).slideDown();
      },
      function () {
        $("ul", this).slideUp();
      }
    );
    // マウスが重なったらホバー カテゴリー
    $('.icon').on('mouseover', function () {
      $(this).css('opacity', 0.5);
    }).on('mouseleave', function () {
      $(this).css('opacity', 1);
    })
    $('.nomal').on('mouseover', function () {
      $(this).css('opacity', 0.5);
    }).on('mouseleave', function () {
      $(this).css('opacity', 1);
    })
    $('.ctg').on('mouseover', function () {
      $(this).css('opacity', 0.5);
    }).on('mouseleave', function () {
      $(this).css('opacity', 1);
    })
    // 新着アイテム　ホバー
    $('.newarrival1').on('mouseover', function () {
      $(this).css('opacity', 0.7);
    }).on('mouseleave', function () {
      $(this).css('opacity', 1);
    })
    // フッターホバー
    $('.footer-main p').on('mouseover', function () {
      $(this).css('opacity', 0.5);
    }).on('mouseleave', function () {
      $(this).css('opacity', 1);
    })
    $('.footer-right p').on('mouseover', function () {
      $(this).css('opacity', 0.5);
    }).on('mouseleave', function () {
      $(this).css('opacity', 1);
    })
    // フッターホバーアイコン
    $('.icon-f p').on('mouseover', function () {
      $(this).css('opacity', 0.5);
    }).on('mouseleave', function () {
      $(this).css('opacity', 1);
    })
  });