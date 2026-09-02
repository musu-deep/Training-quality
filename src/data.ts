import {
  Calendar,
  Clock,
  Globe,
  Video,
  Mic,
  Users,
  Award,
  Sparkles,
  Target,
  Lightbulb,
  Network,
  TrendingUp,
  BookOpen,
  GraduationCap,
  Laptop,
  Rocket,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  ArrowLeft,
  ChevronDown,
} from 'lucide-react'

export const navLinks = [
  { label: 'الرئيسية', href: '#hero' },
  { label: 'عن الملتقى', href: '#about' },
  { label: 'ماذا ينتظرك', href: '#program' },
  { label: 'محاور الملتقى', href: '#schedule' },
  { label: 'الدول المشاركة', href: '#countries' },
  { label: 'المتحدثون', href: '#speakers' },
  { label: 'التسجيل', href: '#registration' },
]

export const heroMeta = [
  { icon: Calendar, text: '22 - 24 سبتمبر 2026' },
  { icon: Video, text: 'اون لاين - زووم' },
  { icon: Clock, text: 'مساءً بتوقيت السودان' },
]

export const heroCardItems = [
  'اوراق عمل تناقش قضايا جودة التدريب',
  'ورش عمل تفاعلية ومفيدة',
  'فرص للتواصل والشبكات المهنية',
  'تطوير المهارات القيادية في مجال جودة التدريب',
]

export const aboutFeatures = [
  {
    icon: BookOpen,
    title: 'أوراق عمل متخصصة',
    desc: 'تناقش أحدث قضايا جودة التدريب',
  },
  {
    icon: Users,
    title: 'ورش تفاعلية',
    desc: 'ورش عمل مفيدة وتطبيقية',
  },
  {
    icon: Network,
    title: 'تواصل مهني',
    desc: 'فرص للتواصل وبناء الشبكات',
  },
  {
    icon: TrendingUp,
    title: 'تطوير القيادة',
    desc: 'تطوير المهارات القيادية في الجودة',
  },
]

export const programCards = [
  {
    icon: Mic,
    title: 'جلسات علمية متخصصة',
    desc: 'جلسات حوارية وعلمية تقدم أحدث الأبحاث والدراسات في مجال جودة التدريب',
  },
  {
    icon: GraduationCap,
    title: 'جرعة تدريبية احترافية',
    desc: 'تدريب مكثف للمدربين على أحدث المعايير والممارسات المهنية',
  },
  {
    icon: Globe,
    title: 'تجارب عربية ملهمة',
    desc: 'تجارب وخبرات ناجحة من عدة دول عربية في مجال التدريب',
  },
  {
    icon: Sparkles,
    title: 'جلسة تفاعلية',
    desc: 'جلسة تفاعلية تناقش مستقبل التدريب وتوجهاته الحديثة',
  },
  {
    icon: Target,
    title: 'توصيات مهنية',
    desc: 'توصيات ومخرجات مهنية قابلة للتطبيق في بيئة العمل',
  },
  {
    icon: Award,
    title: 'اعتماد مهني',
    desc: 'فرصة للاطلاع على معايير الاعتماد المهني للمدربين',
  },
]

export const scheduleDays = [
  {
    num: '1',
    title: 'اليوم الأول',
    subtitle: 'الافتتاح الرسمي',
    topics: [
      'نحو نموذج متكامل لجودة التدريب',
      'استراتيجيات التدريب الحديثة والتفاعلية',
    ],
  },
  {
    num: '2',
    title: 'اليوم الثاني',
    subtitle: 'المدرب المعتمد والقيمة المضافة',
    topics: [
      'من المدرب الخبير إلى مهندس تجربة التعلم',
      'معايير الاعتماد المهني للمدربين',
    ],
  },
  {
    num: '3',
    title: 'اليوم الثالث',
    subtitle: 'جودة التدريب الرقمي',
    topics: [
      'جودة التدريب في البيئة الرقمية',
      'تجارب عربية ملهمة في التدريب',
      'مستقبل التدريب وقضايا جدلية',
      'الجلسة الختامية وإعلان التوصيات',
    ],
  },
]

export const countries = [
  { flag: '🇸🇩', name: 'السودان' },
  { flag: '🇪🇬', name: 'مصر' },
  { flag: '🇯🇴', name: 'الأردن' },
  { flag: '🇱🇧', name: 'لبنان' },
  { flag: '🇸🇾', name: 'سوريا' },
  { flag: '🇶🇦', name: 'قطر' },
  { flag: '🇧🇭', name: 'البحرين' },
  { flag: '🇱🇾', name: 'ليبيا' },
  { flag: '🇲🇷', name: 'موريتانيا' },
  { flag: '🇾🇪', name: 'اليمن' },
]

export const speakers = [
  { name: 'د. يوسف بن علي الكاظم', initials: 'ي', image: 'yousef-alkazem.webp' },
  { name: 'أ. ماريا حيدر', initials: 'م', image: 'maria-haidar.webp' },
  { name: 'د. محمد زين العابدين أبوجديري', initials: 'م', image: 'mohamed-zain-abugderi.webp' },
  { name: 'د. منيب عبدالعزيز', initials: 'م', image: 'muneeb-abdelaziz.webp' },
  { name: 'د. محمد البيه', initials: 'م', image: 'mohamed-elbeih.webp' },
  { name: 'أ. عبدالعزيز السندي', initials: 'ع', image: 'abdulaziz-al-sindi.webp' },
  { name: 'د. محمد عبد الحميد سيد أحمد', initials: 'م', image: 'mohamed-abdelhamid-sidahmed.webp' },
  { name: 'د. فتحية كعيم', initials: 'ف', image: 'fathia-kuaim.webp' },
  { name: 'أ. رشاد قاسم عبدالله', initials: 'ر' },
  { name: 'د. وائل رضا', initials: 'و', image: 'wael-rida.webp' },
  { name: 'أ. العادل محمد محمود', initials: 'ع', image: 'aladel-mohamed-mahmoud.webp' },
  { name: 'د. نشأت صباح البعيني', initials: 'ن', image: 'nashat-sabah-albuaini.webp' },
  { name: 'د. عاطف عوض', initials: 'ع', image: 'atef-awad.webp' },
  { name: 'د. مجدي محمد حمدان', initials: 'م' },
  { name: 'أ. معتز محجوب عثمان', initials: 'م', image: 'moataz-mahjoub-othman.webp' },
]

export const registrationBenefits = [
  { icon: CheckCircle2, text: 'المشاركة في جميع جلسات الملتقى الثلاثة' },
  { icon: CheckCircle2, text: 'الوصول إلى التسجيلات والمواد التعليمية' },
  { icon: CheckCircle2, text: 'شهادة مشاركة من الجمعية السودانية لجودة التدريب' },
  { icon: CheckCircle2, text: 'فرص التواصل مع نخبة الخبراء والمتحدثين' },
]

export const contactInfo = {
  email: 'sudanesequality2019@gmail.com',
  phones: ['+249 91 213 1272', '+249 91 213 1272'],
}

export const icons = {
  Calendar,
  Clock,
  Globe,
  Video,
  Mic,
  Users,
  Award,
  Sparkles,
  Target,
  Lightbulb,
  Network,
  TrendingUp,
  BookOpen,
  GraduationCap,
  Laptop,
  Rocket,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  ArrowLeft,
  ChevronDown,
}
