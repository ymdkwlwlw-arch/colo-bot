import java.util.*;

public class MessengerBot {
    // قاعدة بيانات مؤقتة للأعضاء والمشرفين
    static Set<String> admins = new HashSet<>(Arrays.asList("AdminID")); // ضع معرف المشرف هنا
    static Set<String> muted = new HashSet<>();
    static Map<String, Integer> bank = new HashMap<>();

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("بوت الماسنجر جاهز للعمل...");

        while (true) {
            System.out.print("أدخل الرسالة: ");
            String message = sc.nextLine();
            handleMessage("UserID", message); // ضع معرف المستخدم هنا أو اجعله ديناميكي
        }
    }

    public static void handleMessage(String userId, String message) {
        // حماية الشات من الكتابة إذا تم كتم العضو
        if (muted.contains(userId)) {
            System.out.println("عذراً، لا يمكنك الكتابة الآن.");
            return;
        }

        // ----------------- أوامر الإدارة -----------------
        switch (message) {
            case "رفع": case "اضف-أمر": case "باند": case "حذف-أمر":
            case "سكون": case "لاست":
                System.out.println("تم تنفيذ أمر الإدارة: " + message);
                if(message.equals("سكون")) muted.add(userId);
                break;
        }

        // ----------------- أوامر AI -----------------
        switch (message) {
            case "قول2": case "جي": case "ديبسكو": case "عدل":
            case "جبلي": case "اكازا":
                System.out.println("تم تنفيذ أمر الذكاء الاصطناعي: " + message);
                break;
        }

        // ----------------- أوامر الاقتصاد -----------------
        switch (message) {
            case "بنك":
                bank.putIfAbsent(userId, 100);
                System.out.println("رصيدك: " + bank.get(userId));
                break;
            case "يومية":
                bank.put(userId, bank.getOrDefault(userId, 100) + 50);
                System.out.println("تمت إضافة المكافأة اليومية. رصيدك: " + bank.get(userId));
                break;
            default:
                String[] economyCommands = {
                    "تنقيب","عمل","قمة","حيوان","جمع","رهان","سرقة","تحدي-انمي",
                    "بيع","ادواتي","عكس","علم","سداد","شراء","شخصية-وصف"
                };
                if(Arrays.asList(economyCommands).contains(message)){
                    System.out.println("تم تنفيذ أمر الاقتصاد: " + message);
                }
                break;
        }

        // ----------------- أوامر عام -----------------
        String[] generalCommands = {
            "اختار","بحث","الاوامر","كلمات","تعلم2","بروفايل","رانك","تعلم","خط","مهام",
            "ترجم","ابتايم","الطقس","زوجني","افك","اكس-او","المطور","اختبار","ايدي","برو",
            "بنج","بوسة","بوسة2","تفاعل","تيد","جوجو","جوجوس","حجرة","زواج","موزان","شيل",
            "صفع","صفع2","حب","كراهية","احفظ","منو-الاغبى","منو-حيعرس-أول","نسبة-الحب","هل-تعلم"
        };
        if(Arrays.asList(generalCommands).contains(message)){
            System.out.println("تم تنفيذ أمر عام: " + message);
        }

        // ----------------- أوامر المجموعة -----------------
        String[] groupCommands = {"ملاحظه","قواعد","الدعم","حذف","معلوماتي","ادمن","تذكير","مجموعتي"};
        if(Arrays.asList(groupCommands).contains(message)){
            System.out.println("تم تنفيذ أمر مجموعة: " + message);
        }

        // ----------------- أوامر الوسائط -----------------
        String[] mediaCommands = {"بلو","غلاف","صور","اغنية","تيكتوك","فيديو","خلفية"};
        if(Arrays.asList(mediaCommands).contains(message)){
            System.out.println("تم تنفيذ أمر وسائط: " + message);
        }

        // ----------------- أوامر الأدوات -----------------
        String[] toolsCommands = {"ازالة","تلوين","خطوط","رفع","مهمل","تحسين","استعادة","بريد"};
        if(Arrays.asList(toolsCommands).contains(message)){
            System.out.println("تم تنفيذ أمر أدوات: " + message);
        }

        // ----------------- أوامر الحماية -----------------
        switch(message) {
            case "منع-اسم":
                System.out.println("تم تفعيل حماية تغيير الاسم.");
                break;
            case "منع-كنية":
                System.out.println("تم تفعيل حماية تغيير الكنية.");
                break;
            case "منع-صورة":
                System.out.println("تم تفعيل حماية تغيير الصورة الشخصية.");
                break;
            case "منع-إزعاج":
                System.out.println("تم تفعيل منع الإزعاج.");
                break;
            case "منع-رابط":
                System.out.println("تم تفعيل منع الروابط.");
                break;
            case "منع-فيديو":
                System.out.println("تم تفعيل منع إرسال الفيديوهات.");
                break;
            case "منع-صورة-ممنوعة":
                System.out.println("تم تفعيل منع إرسال الصور الممنوعة.");
                break;
            case "كتم-مؤقت":
                muted.add(userId);
                System.out.println("تم كتم العضو مؤقتًا.");
                break;
            case "تحذير":
                System.out.println("تم إرسال تحذير للعضو المخالف.");
                break;
            case "طرد-مخرب":
                System.out.println("تم طرد العضو المخالف.");
                break;
        }
    }
                                 }
