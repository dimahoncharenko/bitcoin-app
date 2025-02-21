import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";
import AsyncStorage from "@react-native-async-storage/async-storage";

const resources = {
  "en-US": {
    translation: {
      welcome: {
        card1: "Lorem ipsum",
        card2: "Lorem ipsum 2",
        card3: "Lorem ipsum 3",
        card4: "Lorem ipsum 4",
        card5: "Lorem ipsum 5",
      },
      search: {
        title: "Search",
        placeholder: "Search Products...",
        name: "Name",
        id: "ID:",
      },
      shared: {
        signIn: "Sign In",
        signUp: "Sign up",
        submit: "Continue",
        ok: "OK",
      },
      signUp: {
        account: "Personal Account",
        header: "Sign up",
        fields: {
          name: "Name",
          namePlaceholder: "John Doe",
          nameError: "Username should be at least 2 characters long",
          email: "E-mail",
          invalidEmail: "Email is not correct",
          emptyEmail: "Please enter your email address",
          emailPlaceholder: "emma-watson@m.com",
          password: "Password",
          passwordError: "Password must be at least 6 characters long",
        },
      },
      signIn: {
        noAccount: "Create Account",
        account: "Personal Account",
        header: "Login",
        forgot: "Forgot?",
        fields: {
          email: "Email",
          emailError: "Please enter your email address",
          emailPlaceholder: "emma-watson@m.com",
          password: "Password",
          passwordError: "Password must be at least 6 characters long",
        },
      },
      createPin: {
        header: "Create a Pin code",
        description: "enter 5 digit code:",
      },
      repeatPin: {
        header: "Repeat a Pin code",
        description: "enter 5 digit code:",
        errorHead: "Invalid PIN",
        errorBody: "Please try again.",
      },
      submitPin: {
        header: "Submit a Pin code",
        description: "enter 5 digit code:",
        errorHead: "Invalid PIN",
        errorBody: "Please try again.",
        biometricsHeader: "Login to Bitcoin App with biometrics",
        biometricsCancel: "Cancel",
        biometricsErrorHead: "Biometrics login failed",
        biometricsErrorBody:
          "Biometrics authentication failed or user's denial",
      },
      home: {
        username: "Your name",
        usernameFallback: "John Doe",
        toCall: "Go to call",
        testTask: "Test Task",
        testDescription: "Lorem ipsum",
        beforeStartSection: "Before you start",
        card1: {
          title: "Link you Bank Account",
          steps: "2 steps",
        },
        card2: {
          title: "Add funds to your wallet",
          steps: "3 steps",
        },
        postsSection: "Posts",
        tabbarHome: "Home",
        tabbarPortfolio: "Portfolio",
        tabbarSearch: "Search",
        tabbarProfile: "Profile",
      },
      post: {
        aboutSection: "About",
        commentsSection: "Comments",
        back: "Back",
      },
      profile: {
        header: "Settings",
        basicSection: "Basic",
        basicLanguage: "Language",
        otherSection: "Other",
        otherLogout: "Log Out",
      },
      language: {
        en: "English",
        ar: "Arabic",
      },
    },
  },
  "ar-SA": {
    translation: {
      welcome: {
        card1: "لوريم إيبسوم",
        card2: "لوريم إيبسوم 2",
        card3: "لوريم إيبسوم 3",
        card4: "لوريم إيبسوم 4",
        card5: "لوريم إيبسوم 5",
      },
      search: {
        title: "بحث",
        placeholder: "ابحث عن المنتجات...",
        name: "الاسم",
        id: "المعرف:",
      },
      shared: {
        signIn: "تسجيل الدخول",
        signUp: "إنشاء حساب",
        submit: "متابعة",
        ok: "موافق",
      },
      signUp: {
        account: "حساب شخصي",
        header: "إنشاء حساب",
        fields: {
          name: "الاسم",
          namePlaceholder: "جون دو",
          nameError: "يجب أن يكون اسم المستخدم على الأقل حرفين",
          email: "البريد الإلكتروني",
          invalidEmail: "البريد الإلكتروني غير صحيح",
          emptyEmail: "يرجى إدخال عنوان بريدك الإلكتروني",
          emailPlaceholder: "emma-watson@m.com",
          password: "كلمة المرور",
          passwordError: "يجب أن تكون كلمة المرور 6 أحرف على الأقل",
        },
      },
      signIn: {
        noAccount: "إنشاء حساب",
        account: "حساب شخصي",
        header: "تسجيل الدخول",
        forgot: "نسيت؟",
        fields: {
          email: "البريد الإلكتروني",
          emailError: "يرجى إدخال عنوان بريدك الإلكتروني",
          emailPlaceholder: "emma-watson@m.com",
          password: "كلمة المرور",
          passwordError: "يجب أن تكون كلمة المرور 6 أحرف على الأقل",
        },
      },
      createPin: {
        header: "إنشاء رمز PIN",
        description: "أدخل رمزًا من 5 أرقام:",
      },
      repeatPin: {
        header: "كرر رمز PIN",
        description: "أدخل رمزًا من 5 أرقام:",
        errorHead: "رمز PIN غير صالح",
        errorBody: "يرجى المحاولة مرة أخرى.",
      },
      submitPin: {
        header: "إرسال رمز PIN",
        description: "أدخل رمزًا من 5 أرقام:",
        errorHead: "رمز PIN غير صالح",
        errorBody: "يرجى المحاولة مرة أخرى.",
        biometricsHeader: "تسجيل الدخول إلى تطبيق بيتكوين بالبصمة",
        biometricsCancel: "إلغاء",
        biometricsErrorHead: "فشل تسجيل الدخول بالبصمة",
        biometricsErrorBody: "فشلت المصادقة البيومترية أو رفض المستخدم",
      },
      home: {
        username: "اسمك",
        usernameFallback: "جون دو",
        toCall: "الذهاب إلى المكالمة",
        testTask: "مهمة اختبار",
        testDescription: "لوريم إيبسوم",
        beforeStartSection: "قبل أن تبدأ",
        card1: {
          title: "ربط حسابك البنكي",
          steps: "خطوتان",
        },
        card2: {
          title: "إضافة أموال إلى محفظتك",
          steps: "ثلاث خطوات",
        },
        postsSection: "المنشورات",
        tabbarHome: "الرئيسية",
        tabbarPortfolio: "المحفظة",
        tabbarSearch: "البحث",
        tabbarProfile: "الملف الشخصي",
      },
      post: {
        aboutSection: "حول",
        commentsSection: "التعليقات",
        back: "رجوع",
      },
      profile: {
        header: "الإعدادات",
        basicSection: "الأساسيات",
        basicLanguage: "اللغة",
        otherSection: "أخرى",
        otherLogout: "تسجيل الخروج",
      },
      language: {
        en: "الإنجليزية",
        ar: "العربية",
      },
    },
  },
};

const initI18n = async () => {
  let savedLanguage = (await AsyncStorage.getItem("language")) || "en-US";

  if (!savedLanguage) {
    savedLanguage = Localization.locale;
  }

  i18n.use(initReactI18next).init({
    compatibilityJSON: "v4",
    resources,
    lng: savedLanguage,
    fallbackLng: "pt-BR",
    interpolation: {
      escapeValue: false,
    },
  });
};

initI18n();

export default i18n;
