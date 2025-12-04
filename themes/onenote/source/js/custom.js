// === 阅读进度条 ===
window.addEventListener('scroll', function() {
  const progressBar = document.querySelector('.progress-bar');
  if (progressBar) {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (window.pageYOffset / totalHeight) * 100;
    progressBar.style.width = Math.min(progress, 100) + '%';
  }
});

// === TOC移动端切换 ===
document.addEventListener('DOMContentLoaded', function() {
  const tocContainer = document.querySelector('.toc-container');
  const tocToggleButton = document.querySelector('.toc-toggle-button');

  if (tocToggleButton && tocContainer) {
    tocToggleButton.addEventListener('click', function() {
      tocContainer.classList.toggle('is-visible');
    });

    // 点击TOC外部区域关闭TOC
    document.addEventListener('click', function(e) {
      if (window.innerWidth <= 1024) {
        if (!tocContainer.contains(e.target) && !tocToggleButton.contains(e.target)) {
          tocContainer.classList.remove('is-visible');
        }
      }
    });

    // 点击TOC链接后关闭TOC（移动端）
    const tocLinks = tocContainer.querySelectorAll('.toc-link');
    tocLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 1024) {
          setTimeout(function() {
            tocContainer.classList.remove('is-visible');
          }, 300);
        }
      });
    });
  }
});

// === 滚动触发淡入动画 ===
document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  const fadeElements = document.querySelectorAll('.fade-in-element');
  fadeElements.forEach(function(el) {
    observer.observe(el);
  });
});

// === 平滑滚动 ===
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(function(link) {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});
