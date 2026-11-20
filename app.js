/**
 * ALFARIDA FURNITURE (معرض ومصنع الفريدة للأثاث)
 * Interactive UI, Catalog Filter, Modals, Swatches, & Accordion Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Catalog Product Data ---
  const products = {
    'AF-101': {
      sku: 'AF-101',
      title: 'انتريه مودرن درجات ترابية',
      category: 'living',
      categoryName: 'انتريهات وركنيات',
      image: 'img/hero-living.jpg',
      badge: 'الأكثر طلباً',
      tagline: 'راحة استثنائية بتناسق درجات البني والبيج الدافئ',
      wood: 'خشب زان أحمر روماني طبيعي مجفف مفرز',
      fabric: 'قماش بوكليه مستورد وقطيفة معالجة ووتر ريبلينت',
      foam: 'إسفنج سوفت كثافة 36 عالي المرونة (HR) + طبقة فايبر حراري',
      dimensions: 'كنبة 3 مقاعد: 220×95 سم | كنبة مقعدين: 175×95 سم | 2 فوتيه: 85×80 سم',
      warranty: '10 سنوات ضمان معتمد ضد عيوب الصناعة والشاسيه',
      leadTime: 'متاح للتسليم الفوري بالمعرض أو تفصيل خلال 14 يوم عمل'
    },
    'AF-102': {
      sku: 'AF-102',
      title: 'غرفة معيشة نيو كلاسيك',
      category: 'living',
      categoryName: 'انتريهات وركنيات',
      image: 'img/living-2.jpg',
      badge: 'تصميم حصري 2024',
      tagline: 'أناقة الخطوط المعمارية مع تنجيد كابيتونيه يدوي راقٍ',
      wood: 'هيكل زان أحمر مصمت مع قواعد معدنية بلون برونزي مخملي',
      fabric: 'أقمشة جاكار أوروبية مدمجة مع مخمل ناعم مقاوم للبهتان',
      foam: 'إسفنج كثافة 35 مضغوط مع بطانة سبرينج جيب معزولة',
      dimensions: 'ركنة عريضة: 320×240 سم عمق 100 سم | بانكيت استرخاء: 120×45 سم',
      warranty: '10 سنوات ضمان للشاسيه وخشب الزان',
      leadTime: 'تنفيذ خلال 15 إلى 20 يوم عمل مع اختيار ألوان القماش'
    },
    'AF-103': {
      sku: 'AF-103',
      title: 'ركنة مودرن مريحة',
      category: 'living',
      categoryName: 'انتريهات وركنيات',
      image: 'img/sofa-sectional.webp',
      badge: 'راحة فائقة',
      isContain: true,
      tagline: 'عمق جلوس رحب وتصميم حرف L يجمع العائلة في دفء',
      wood: 'خشب زان أبيض وأحمر مجمع بميكانيزم تركي مانع للصرير',
      fabric: 'كتان تركي فاخر ناعم الملمس وقابل للغسيل والفك',
      foam: 'وسائد جلوس مايكروفايبر مع نواة إسفنج طبي كثافة 38',
      dimensions: '300×200 سم زاوية متغيرة يمين/يسار بعمق 105 سم',
      warranty: '5 سنوات صيانة مجانية + 10 سنوات ضمان الهيكل',
      leadTime: 'متوفر بأكثر من 40 لون قماش متاح للطلب'
    },
    'AF-201': {
      sku: 'AF-201',
      title: 'صالون كلاسيك فاخر مذهب',
      category: 'salon',
      categoryName: 'صالونات كلاسيك',
      image: 'img/salon-classic.webp',
      badge: 'نحت يدوي أويما',
      tagline: 'تحفة ملكية بنقوش يدوية أصيلة وورق ذهب فرنسي عيار 24',
      wood: 'خشب زان أحمر ماسيف بالكامل محفور يدوياً بأيدي كبار النحاتين',
      fabric: 'حرير دمشقي وجوبلان فرنسي مطرز بخيوط برونزية مقاومة للتآكل',
      foam: 'شلت مقاعد منفصلة مدمجة بريش نعام وإسفنج طبي ممتاز',
      dimensions: 'كنبة ملكية: 235×90 سم | 4 فوتيهات مذهبة: 85×80 سم | ترابيزة رخام كرارا',
      warranty: 'ضمان مفتوح على جودة الأويما والخشب الزان',
      leadTime: 'تصنيع خاص يستغرق 25 - 30 يوماً من الحفر والتشطيب'
    },
    'AF-301': {
      sku: 'AF-301',
      title: 'غرفة نوم ماستر مودرن',
      category: 'bedroom',
      categoryName: 'غرف نوم',
      image: 'img/bedroom-1.jpg',
      badge: 'ماستر سويت',
      tagline: 'ملاذ الراحة الشخصية بأحدث معايير الفنادق العالمية الخمس نجوم',
      wood: 'قشرة آرو طبيعي مع شاسيه زان أحمر ومفصلات بلوم سوفت كلوز',
      fabric: 'ظهر سرير مبطن بقماش بوكليه كريمي معزول مع إضاءة ليد مخفية',
      foam: 'تنجيد السرير عالي الكثافة مع قاعدة سرير شانون داعمة للمرتبة',
      dimensions: 'سرير: 180×200 سم | دولاب جرار: 280×225 سم | تسريحة معلقة + 2 كومود',
      warranty: '10 سنوات ضمان للمفصلات الميكانيكية والهيكل الخشبي',
      leadTime: 'تفصيل حسب مقاسات غرفتك خلال 20 يوم عمل'
    },
    'AF-401': {
      sku: 'AF-401',
      title: 'طقم سفرة خشب طبيعي متكامل',
      category: 'dining',
      categoryName: 'سفرة',
      image: 'img/dining-set.webp',
      badge: 'طقم 8 كراسي',
      tagline: 'تجربة ضيافة استثنائية بطاولة ضخمة وكراسي مريحة لساعات',
      wood: 'لوح طاولة زان أحمر مع أرجل خشبية هندسية صلبة ودهان بولي يوريثان',
      fabric: 'كراسي مبطنة بقماش قطيفة وتر بروف وقواعد زان مدعمة',
      foam: 'حشو مقاعد الكراسي فوم عالي التحمل لا يهبط مع مرور السنين',
      dimensions: 'طاولة: 220×100 سم ارتفاع 76 سم | 8 كراسي ضيافة | بوفيه مودرن 200 سم',
      warranty: '10 سنوات ضمان كامل ضد التقوس وتغير لون الخشب',
      leadTime: 'متاح بالمعرض أو تنفيذ بمقاس مخصص خلال 14 يوم'
    },
    'AF-402': {
      sku: 'AF-402',
      title: 'طاولة سفرة خشبية بتصميم معماري',
      category: 'dining',
      categoryName: 'سفرة',
      image: 'img/dining-table.webp',
      badge: 'تصميم معماري',
      tagline: 'أصالة الخشب الطبيعي الحي مع أطراف حرة وكتل نحتية مهيبة',
      wood: 'خشب طبيعي ماسيف سماكة 5 سم معالج ضد الرطوبة وحرارة الأواني',
      fabric: 'تتوافق مع مختلف كراسي السفرة الجلدية أو القماشية المتوفرة لدينا',
      foam: 'تصميم صلب غير ممتص للزيوت والبقع وسهل التنظيف اليومي',
      dimensions: 'طول 240 سم × عرض 105 سم ارتفاع 77 سم (تتسع حتى 10 أفراد)',
      warranty: '10 سنوات ضمان على اللوح الخشبي والربط الميكانيكي',
      leadTime: 'قطعة حصرية تصنع حسب الطلب مع اختيار تموجات لوح الخشب'
    }
  };

  // --- Portfolio Projects Data ---
  const portfolioProjects = {
    'proj-1': {
      title: 'تأثيث فيلا مودرن - التجمع الخامس',
      tag: 'فيلا سكنية • تأثيث متكامل',
      image: 'img/hero-living.jpg',
      location: 'القاهرة الجديدة، التجمع الخامس',
      scope: 'تأثيث كامل لمنطقة الاستقبال والمعيشة (صالون، ركنة عائلية، سفرة 10 كراسي، ووحدات ديكور حائطية)',
      materials: 'خشب زان أحمر روماني طبيعي، أقمشة بوكليه كتان، رخام إسباني كريم مارفيل، إكسسوارات ذهبية',
      duration: 'تم التنفيذ والتسليم خلال 28 يوم عمل متضمنة المعاينة والتركيب',
      feedback: '«تعامل راقٍ والتزام مذهل بالمواعيد، جودة الأثاث على الطبيعة فاقت توقعاتنا بكثير.» — د. أحمد المنشاوي'
    },
    'proj-2': {
      title: 'صالون كلاسيك ملكي - قصر بالشيخ زايد',
      tag: 'قصور وفلل • كلاسيك فاخر',
      image: 'img/salon-classic.webp',
      location: 'مدينة الشيخ زايد، كمبوند الربوة',
      scope: 'تصنيع صالونين كلاسيك بطراز لويس الخامس عشر بحفر يدوي مع صالون استقبال مذهب وقاعة طعام فاخرة',
      materials: 'خشب زان مجفف ماسيف 100%، دهان ورق ذهب فرنسي 24k، حرير دمشقي أصلي مطرز يدوياً',
      duration: '45 يوماً من الحفر اليدوي الدقيق والتشطيب الملكي والتسليم مع طاقم خبراء التركيب',
      feedback: '«نحت الأويما تحفة فنية حقيقية، كل زائر لقصرنا يبدي إعجابه بدقة التفاصيل.» — م. خالد السويدي'
    },
    'proj-3': {
      title: 'جناح نوم رئيسي متكامل - بنتهاوس بالمعادي',
      tag: 'بنتهاوس • غرف نوم ماستر',
      image: 'img/bedroom-1.jpg',
      location: 'المعادي، كورنيش النيل',
      scope: 'غرفة نوم رئيسية كاملة مدمجة مع دريسنج روم هيدروليكية، بانكيت، ووحدات إضاءة خفية بتصميم كوستال فاخر',
      materials: 'قشرة خشب آرو وجوز طبيعي، تنجيد مخملي فاخر، مفصلات ألمانية بلوم هيدروليك سوفت كلوز',
      duration: 'تم التسليم خلال 21 يوم عمل شاملاً التنسيق مع المقاسات المعمارية الدقيقة',
      feedback: '«استغلال ذكي للمساحات وجودة نجارة تدل على خبرة مصنع محترف بحق.» — أ. نيفين رضوان'
    },
    'proj-4': {
      title: 'صالة طعام واستقبال راقية - بالم هيلز',
      tag: 'مساحات ضيافة • سفرة ومجالس',
      image: 'img/dining-set.webp',
      location: 'مدينة السادس من أكتوبر، بالم هيلز',
      scope: 'طاولة طعام خشبية ضخمة 8 مقاعد مع كونسول رخامي، بوفيه بمرآة بانورامية، وطقم فوتيهات استراحة',
      materials: 'خشب طبيعي مصمت سماكة عالية، كراسي قماش ووتر بروف مقاوم للبقع، دهان بولي يوريثان حراري',
      duration: 'تم التجهيز والتركيب خلال 18 يوماً مع شهادة ضمان معتمدة 10 سنوات',
      feedback: '«الطاولة تحفة هندسية تجمع بين صلابة الخشب وراحة المقاعد لساعات طويلة.» — د. حازم الصاوي'
    }
  };

  // --- Header Sticky Effect ---
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Scroll to Top visibility
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }
  });

  // --- Scroll to Top Action ---
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- Mobile Drawer Menu ---
  const menuToggle = document.getElementById('menuToggle');
  const drawerClose = document.getElementById('drawerClose');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  function openDrawer() {
    mobileDrawer.classList.add('active');
    drawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    mobileDrawer.classList.remove('active');
    drawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (menuToggle) menuToggle.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  // --- Catalog Category Filtering ---
  const filterPills = document.querySelectorAll('.filter-pill');
  const productCards = document.querySelectorAll('.product-card');

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const selectedCategory = pill.getAttribute('data-category');

      productCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (selectedCategory === 'all' || cardCategory === selectedCategory) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // Categories strip chips clicking: scroll to catalog and apply filter
  const categoryChips = document.querySelectorAll('.category-chip');
  categoryChips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.preventDefault();
      const cat = chip.getAttribute('data-filter');
      const targetPill = document.querySelector(`.filter-pill[data-category="${cat}"]`);
      if (targetPill) {
        targetPill.click();
      }
      const catalogSection = document.getElementById('catalog');
      if (catalogSection) {
        catalogSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // --- Quick-View Modal ---
  const quickViewModal = document.getElementById('quickViewModal');
  const modalClose = document.getElementById('modalClose');
  const modalBackdrop = document.getElementById('modalBackdrop');

  function openQuickView(sku) {
    const item = products[sku];
    if (!item) return;

    document.getElementById('modalSku').textContent = item.sku;
    document.getElementById('modalCategoryTag').textContent = item.categoryName;
    document.getElementById('modalBadge').textContent = item.badge;
    document.getElementById('modalTitle').textContent = item.title;
    document.getElementById('modalTagline').textContent = item.tagline;
    document.getElementById('modalWood').textContent = item.wood;
    document.getElementById('modalFabric').textContent = item.fabric;
    document.getElementById('modalFoam').textContent = item.foam;
    document.getElementById('modalDimensions').textContent = item.dimensions;
    document.getElementById('modalWarranty').textContent = item.warranty;
    document.getElementById('modalLeadTime').textContent = item.leadTime;

    const modalImg = document.getElementById('modalImage');
    modalImg.src = item.image;
    modalImg.alt = item.title;

    // Check if contain style needed (e.g. AF-103)
    const imgWrapper = document.getElementById('modalImgWrapper');
    if (item.isContain) {
      imgWrapper.style.backgroundColor = '#FAF8F3';
      modalImg.style.objectFit = 'contain';
      modalImg.style.padding = '20px';
    } else {
      imgWrapper.style.backgroundColor = 'var(--bg-warm)';
      modalImg.style.objectFit = 'cover';
      modalImg.style.padding = '0';
    }

    // Set WhatsApp inquiry link
    const waText = encodeURIComponent(`مرحباً معرض ومصنع الفريدة للأثاث، أود الاستفسار عن كود الموديل: ${item.sku} (${item.title}) وخيارات المقاسات والألوان المتوفرة.`);
    const waBtn = document.getElementById('modalWhatsAppBtn');
    waBtn.href = `https://wa.me/201000000000?text=${waText}`;

    // Set Quotation trigger in modal
    const rfqBtn = document.getElementById('modalRfqBtn');
    rfqBtn.onclick = () => {
      closeQuickView();
      openRfqModal(`استفسار عن موديل ${item.sku} - ${item.title}`);
    };

    quickViewModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeQuickView() {
    quickViewModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalClose) modalClose.addEventListener('click', closeQuickView);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeQuickView);

  // Quick view triggers
  document.querySelectorAll('.btn-quickview').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const sku = btn.getAttribute('data-sku');
      openQuickView(sku);
    });
  });

  // Swatch interactions in modal
  const swatches = document.querySelectorAll('.swatch-item');
  swatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
      swatches.forEach(s => s.classList.remove('active'));
      swatch.classList.add('active');
      const swatchName = swatch.getAttribute('data-swatch');
      const swatchLabel = document.getElementById('activeSwatchLabel');
      if (swatchLabel) {
        swatchLabel.textContent = `(المحدد: ${swatchName})`;
      }
    });
  });

  // --- Portfolio Lightbox Modal ---
  const portfolioModal = document.getElementById('portfolioModal');
  const portfolioModalClose = document.getElementById('portfolioModalClose');
  const portfolioModalBackdrop = document.getElementById('portfolioModalBackdrop');

  function openPortfolioModal(projId) {
    const proj = portfolioProjects[projId];
    if (!proj) return;

    document.getElementById('portModalTitle').textContent = proj.title;
    document.getElementById('portModalTag').textContent = proj.tag;
    document.getElementById('portModalLocation').textContent = proj.location;
    document.getElementById('portModalScope').textContent = proj.scope;
    document.getElementById('portModalMaterials').textContent = proj.materials;
    document.getElementById('portModalDuration').textContent = proj.duration;
    document.getElementById('portModalFeedback').textContent = proj.feedback;

    const img = document.getElementById('portModalImg');
    img.src = proj.image;
    img.alt = proj.title;

    // Contact button for similar project
    const portWaBtn = document.getElementById('portModalWaBtn');
    const waText = encodeURIComponent(`مرحباً مصنع الفريدة للأثاث، شاهدت سابقة أعمالكم في مشروع: (${proj.title}) وأرغب في تأثيث مشروع مشابه.`);
    portWaBtn.href = `https://wa.me/201000000000?text=${waText}`;

    portfolioModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closePortfolioModal() {
    portfolioModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (portfolioModalClose) portfolioModalClose.addEventListener('click', closePortfolioModal);
  if (portfolioModalBackdrop) portfolioModalBackdrop.addEventListener('click', closePortfolioModal);

  document.querySelectorAll('.portfolio-card').forEach(card => {
    card.addEventListener('click', () => {
      const projId = card.getAttribute('data-project');
      openPortfolioModal(projId);
    });
  });

  // --- RFQ / Quotation Modal ---
  const rfqModal = document.getElementById('rfqModal');
  const rfqModalClose = document.getElementById('rfqModalClose');
  const rfqModalBackdrop = document.getElementById('rfqModalBackdrop');
  const rfqForm = document.getElementById('rfqForm');

  function openRfqModal(defaultSubject = '') {
    rfqModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (defaultSubject) {
      const subjectInput = document.getElementById('rfqSubject');
      if (subjectInput) subjectInput.value = defaultSubject;
    }
  }

  function closeRfqModal() {
    rfqModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (rfqModalClose) rfqModalClose.addEventListener('click', closeRfqModal);
  if (rfqModalBackdrop) rfqModalBackdrop.addEventListener('click', closeRfqModal);

  // Triggers for RFQ
  document.querySelectorAll('.open-rfq-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const subject = btn.getAttribute('data-subject') || '';
      openRfqModal(subject);
    });
  });

  // RFQ Form Submission
  if (rfqForm) {
    rfqForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('rfqName').value.trim();
      const phone = document.getElementById('rfqPhone').value.trim();
      const category = document.getElementById('rfqCategory').value;
      const city = document.getElementById('rfqCity').value.trim();
      const notes = document.getElementById('rfqNotes').value.trim();

      const waText = encodeURIComponent(`طلب تسعير جديد من موقع الفريدة للأثاث:
الاسم: ${name}
رقم الهاتف: ${phone}
نوع الخدمة/القسم: ${category}
المدينة: ${city}
تفاصيل الطلب: ${notes}`);

      closeRfqModal();
      showToast('شكراً لتواصلك! سيتم نقلك لمحادثة واتساب مباشرةً لتأكيد تفاصيل طلبك.');

      setTimeout(() => {
        window.open(`https://wa.me/201000000000?text=${waText}`, '_blank');
      }, 1200);

      rfqForm.reset();
    });
  }

  // --- FAQ Accordion ---
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');

    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items for clean accordion UX
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherContent = otherItem.querySelector('.faq-content');
        if (otherContent) otherContent.style.maxHeight = null;
        otherItem.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
      });

      if (!isActive) {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Open first FAQ item by default for immediate preview
  if (faqItems.length > 0) {
    const firstTrigger = faqItems[0].querySelector('.faq-trigger');
    const firstContent = faqItems[0].querySelector('.faq-content');
    faqItems[0].classList.add('active');
    firstContent.style.maxHeight = firstContent.scrollHeight + 'px';
    firstTrigger.setAttribute('aria-expanded', 'true');
  }

  // --- Keyboard (Escape) & Modal Accessibility ---
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (quickViewModal.classList.contains('active')) closeQuickView();
      if (portfolioModal.classList.contains('active')) closePortfolioModal();
      if (rfqModal.classList.contains('active')) closeRfqModal();
      if (mobileDrawer.classList.contains('active')) closeDrawer();
    }
  });

  // --- Toast Notification Helper ---
  function showToast(message) {
    const toast = document.getElementById('toastNotice');
    if (!toast) return;
    const toastMsg = document.getElementById('toastMessage');
    toastMsg.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }
});
