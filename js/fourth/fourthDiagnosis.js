/**
 * Created by winter on 14-1-7.
 */
define(function(require){

    var $ = require("jquery");
    require ('jquery.easing');

    var femaleQuestion = [
        {
            choose:"radio",
            question:"您觉得自己的胖瘦情况（单选）",
            answer:["正常","偏胖","偏瘦","肥胖","非常瘦"]
        },
        {
            choose:"radio",
            question:"您觉得有必要调整体重吗？（单选）",
            answer:["需要增重","需要减肥","无需调整体重"]
        },
        {
            choose:"radio",
            question:"您舌头（舌质）的颜色最接近于 （单选）",
            answer:["淡白","淡红","红","绛（深红）","紫","青"]
        },
        {
            choose:"radio",
            question:"您的舌苔颜色最接近于  （单选）",
            answer:["白","微黄（淡黄）","黄（正黄）","焦黄","灰","黑"]
        },
        {
            choose:"multiple",
            question:"您舌头的样子（多选）",
            answer:["苍老","娇嫩","胖大 ","瘦薄 ","点刺","裂纹","齿痕","正常","歪向一边","不能完全吐出 ","喜欢吐弄","偏长"]
        },
        {
            choose:"multiple",
            question:"您的舌苔形态：（多选）",
            answer:["薄（能隐约看到下面的舌质，均匀分布于舌上）","厚（看不到下面的舌质）","黏腻（油腻状粘液的苔质刮之不落）","腐（如豆腐渣，刮之易落）","光滑无苔","花剥（不连续、有的地方有，有的没有，似地图）"]
        },
        {
            choose:"radio",
            question:"您平时说话的声音 （单选）",
            answer:["洪亮","低沉 ","柔声细语","尖细","有气无力 ","平和有力 "]
        },{
            choose:"radio",
            question:"您平静时的心率 （单选）",
            answer:["60以下","60-70 "," 70-80","80-90","90-100","100以上"]
        },{
            choose:"multiple",
            question:"您身体某个部分或者排泄物、分泌物有特殊气味吗？",
            answer:["口臭","狐臭（腋臭）","特殊体味","鼻涕腥臭（浊涕）","尿液腥臭","女性阴臭（伴瘙痒）","尿液有烂苹果味","尿液清白几乎无味","无以上情况"]
        },
        {
            choose:"radio",
            question:"您的大便有规律吗？",
            answer:["很规律，一天一次  ","很规律，一天两次，无不佳感觉","很规律，两天一次，无不佳感觉 ","一天多次","多天一次","很规律，每天凌晨1-2次 ","不规律，肚子痛之 后就要泻一次","不规律，没有固定周期，也没肚子痛"]
        },
        {
            choose:"radio",
            question:"您大便的形态 （单选）",
            answer:["成形，不干不稀 ","不成形，偏稀","偏稀，且经常水样","偏干","经常燥结，如羊粪","先硬后溏（先干后稀）","时干时稀 ","基本成型，但比较黏滞"]
        },
        {
            choose:"radio",
            question:"您大便的形状 （单选）",
            answer:["较细","较粗","不规则","正常"]
        },
        {
            choose:"radio",
            question:"您大便的排便感觉？",
            answer:["顺畅无异感，几分钟排完","总有便意，又排不出","能排出来、但不顺畅，每次时间较长","里急后重","便前很急、便后则安"]
        },
        {
            choose:"multiple",
            question:"您大便的颜色   （多选）",
            answer:["淡黄","黄色 ","偏白","偏黑","便前有血","便后有血","有脓血","常有未消化物"]
        },{
            choose:"radio",
            question:"您白天的小便次数 （单选）",
            answer:["4-5 ","6-7 ","7-8","8次以上","4次以下"]
        },{
            choose:"radio",
            question:"您夜间的小便次数 （单选）",
            answer:["几乎没有夜尿","偶尔有一次","每晚一次","两次以上 "]
        },
        {
            choose:"multiple",
            question:"您小便 （多选）",
            answer:["清长","短黄","肉眼血尿 ","有潜血（需化验）","有沙石（泌尿系结石）","小便时疼痛 ","浑浊","乳糜尿（乳白色）"]
        },
        {
            choose:"multiple",
            question:"您头面部具体什么地方疼痛 （多选）",
            answer:["头痛","偏头痛","颈项痛","舌痛","颠顶","牙痛","太阳穴痛","额前","咽喉痛","鼻痛","脸颊痛","目胀痛","目痛","耳痛","头面部无疼痛"]
        },
        {
            choose:"multiple",
            question:"您身体其他部位经常有疼痛的地方吗? （多选）",
            answer:["足痛","足跟痛","腿痛","肌肤疼痛","膝痛","肩痛","臂痛 ","股阴痛","背痛 ","腰痛","腰脊痛","尾闾痛","胸痛","心痛","胁痛","胃脘痛","脐腹痛 （脐周） ","小腹痛（小肚子痛）","少腹痛 （除了P，Q，R三种的腹痛）","小便疼痛","肛门疼痛","外阴肿痛","乳房胀痛 ","腿肿痛","膝肿痛","腰痛连腿"]
        },
        {
            choose:"radio",
            question:"您最近常有痰或觉得有痰吐不出来吗？ （单选）",
            answer:["没有","痰白清稀","痰多易咳出","痰黄较稠","痰有泡沫、胶黏、不易咳出","痰中带脓血，或腥臭浓痰 ","痰少有时有血丝"]
        },
        {
            choose:"radio",
            question:"您出汗的情况 （单选）",
            answer:["正常","自汗（动则汗出）","盗汗（夜间入眠出汗，醒则汗止 ）","白天晚上都多汗 ","烘热汗出"]
        },
        {
            choose:"radio",
            question:"您食欲情况  （单选）",
            answer:["正常","食欲欠佳","饥不欲食（饿了又不想吃）","消谷善饥","食后腹满、腹胀","不敢多吃","食欲非常不好、厌食"]
        },
        {
            choose:"multiple",
            question:"您的睡眠情况（多选）",
            answer:["正常","入睡困难","易醒","不分时间，总想睡觉","饭后即困","多梦"]
        },
        {
            choose:"multiple",
            question:"水是生命之源，您喝水的情况  （多选）",
            answer:["喝水量正常","平时喝水很少（不渴、不欲饮）","经常口渴又喝得很少（口渴不欲饮）","经常渴，饮水较多（非茶水与饮料）","喜欢喝凉水","喜欢喝热水","冷热水都可以"]
        },
        {
            choose:"multiple",
            question:"您口中的味道和感觉  （多选）",
            answer:["正常","口苦","口甜","口淡（口中无味）","口咸 ","口酸","口黏腻","口干"]
        },
        {
            choose:"radio",
            question:"你的十个指甲上，有白月牙的共有几个",
            answer:["0-1","2","3-7","8","9-10"]
        },
        {
            choose:"radio",
            question:"指甲上白月牙有多大？",
            answer:["不到指甲五分之一","五分之一左右 ","明显大于五分之一 ","边界模糊、不明显"]
        },
        {
            choose:"radio",
            question:"月经基本情况",
            answer:["未到14岁，无月经","刚来月经不到一年，还不规律","更年期，不规律","已过更年期，已闭经","已到18岁，无月经 ","14-18岁，无月经 ","非以上情况"]
        },
        {
            choose:"radio",
            question:"妇女月经周期",
            answer:["正常","先期（经常提前）","后期 （经常错后）","忽前忽后","闭经（未到更年期)"]
        },
        {
            choose:"radio",
            question:"妇女月经量",
            answer:["正常 ","偏少","偏多","多少不定","淋漓不绝，量不大","淋漓不绝，量很大"]
        },
        {
            choose:"radio",
            question:"妇女月经颜色与形态",
            answer:["正常","色淡","色紫红","色紫黑","有血块","经质粘稠","经质清稀"]
        },
        {
            choose:"multiple",
            question:"月经时有哪些情况出现",
            answer:["经前面部粉刺","经前乳胀","经前不寐 ","经行发热 ","经行头痛","经行目痛","经行口糜","经行身痛 ","经行身痒 ","经行腹痛(痛经@)","经行腰痛 ","经行呕吐","经行泄泻","经行吐衄","经行便血","经行浮肿","经行抽搐","经行眩晕","经行神智异常 ","无以上情况"]
        },
        {
            choose:"multiple",
            question:"其它女科症状",
            answer:["房事淡漠（性冷淡、性欲低下@）","不孕","滑胎","癥瘕（生殖系统肿瘤、子宫内膜异位症、盆腔包块等，常见的子宫肌瘤）","脏躁（抑郁、烦乱、无故悲伤欲哭，或哭笑无常，呵欠常作者）","阴痛","阴痒 ","阴挺(子宫脱垂)  ","阴吹","女阴白斑","阴疮","交接出血","外阴肿痛 ","妇人阴冷","流产后闭经  ","女性同性性取向","女性双性性取向","更年期综合症","无以上情况"]
        },
        {
            choose:"radio",
            question:"您的性欲情况",
            answer:["正常","性欲亢奋","性欲淡漠（性冷淡）"]
        }
    ];
    var maleQuestion = [
        {
            choose:"radio",
            question:"您觉得自己的胖瘦情况（单选）",
            answer:["正常","偏胖","偏瘦","肥胖","非常瘦"]
        },
        {
            choose:"radio",
            question:"您觉得有必要调整体重吗？（单选）",
            answer:["需要增重","需要减肥","无需调整体重"]
        },
        {
            choose:"radio",
            question:"您舌头（舌质）的颜色最接近于 （单选）",
            answer:["淡白","淡红","红","绛（深红）","紫","青"]
        },
        {
            choose:"radio",
            question:"您的舌苔颜色最接近于  （单选）",
            answer:["白","微黄（淡黄）","黄（正黄）","焦黄","灰","黑"]
        },
        {
            choose:"multiple",
            question:"您舌头的样子（多选）",
            answer:["苍老","娇嫩","胖大 ","瘦薄 ","点刺","裂纹","齿痕","正常","歪向一边","不能完全吐出 ","喜欢吐弄","偏长"]
        },
        {
            choose:"multiple",
            question:"您的舌苔形态：（多选）",
            answer:["薄（能隐约看到下面的舌质，均匀分布于舌上）","厚（看不到下面的舌质）","黏腻（油腻状粘液的苔质刮之不落）","腐（如豆腐渣，刮之易落）","光滑无苔","花剥（不连续、有的地方有，有的没有，似地图）"]
        },
        {
            choose:"radio",
            question:"您平时说话的声音 （单选）",
            answer:["洪亮","低沉 ","柔声细语","尖细","有气无力 ","平和有力 "]
        },{
            choose:"radio",
            question:"您平静时的心率 （单选）",
            answer:["60以下","60-70 "," 70-80","80-90","90-100","100以上"]
        },{
            choose:"multiple",
            question:"您身体某个部分或者排泄物、分泌物有特殊气味吗？",
            answer:["口臭","狐臭（腋臭）","特殊体味","鼻涕腥臭（浊涕）","尿液腥臭","女性阴臭（伴瘙痒）","尿液有烂苹果味","尿液清白几乎无味","无以上情况"]
        },
        {
            choose:"radio",
            question:"您的大便有规律吗？",
            answer:["很规律，一天一次  ","很规律，一天两次，无不佳感觉","很规律，两天一次，无不佳感觉 ","一天多次","多天一次","很规律，每天凌晨1-2次 ","不规律，肚子痛之 后就要泻一次","不规律，没有固定周期，也没肚子痛"]
        },
        {
            choose:"radio",
            question:"您大便的形态 （单选）",
            answer:["成形，不干不稀 ","不成形，偏稀","偏稀，且经常水样","偏干","经常燥结，如羊粪","先硬后溏（先干后稀）","时干时稀 ","基本成型，但比较黏滞"]
        },
        {
            choose:"radio",
            question:"您大便的形状 （单选）",
            answer:["较细","较粗","不规则","正常"]
        },
        {
            choose:"radio",
            question:"您大便的排便感觉？",
            answer:["顺畅无异感，几分钟排完","总有便意，又排不出","能排出来、但不顺畅，每次时间较长","里急后重","便前很急、便后则安"]
        },
        {
            choose:"multiple",
            question:"您大便的颜色   （多选）",
            answer:["淡黄","黄色 ","偏白","偏黑","便前有血","便后有血","有脓血","常有未消化物"]
        },{
            choose:"radio",
            question:"您白天的小便次数 （单选）",
            answer:["4-5 ","6-7 ","7-8","8次以上","4次以下"]
        },{
            choose:"radio",
            question:"您夜间的小便次数 （单选）",
            answer:["几乎没有夜尿","偶尔有一次","每晚一次","两次以上 "]
        },
        {
            choose:"multiple",
            question:"您小便 （多选）",
            answer:["清长","短黄","肉眼血尿 ","有潜血（需化验）","有沙石（泌尿系结石）","小便时疼痛 ","浑浊","乳糜尿（乳白色）"]
        },
        {
            choose:"multiple",
            question:"您头面部具体什么地方疼痛 （多选）",
            answer:["头痛","偏头痛","颈项痛","舌痛","颠顶","牙痛","太阳穴痛","额前","咽喉痛","鼻痛","脸颊痛","目胀痛","目痛","耳痛","头面部无疼痛"]
        },
        {
            choose:"multiple",
            question:"您身体其他部位经常有疼痛的地方吗? （多选）",
            answer:["足痛","足跟痛","腿痛","肌肤疼痛","膝痛","肩痛","臂痛 ","股阴痛","背痛 ","腰痛","腰脊痛","尾闾痛","胸痛","心痛","胁痛","胃脘痛","脐腹痛 （脐周） ","小腹痛（小肚子痛）","少腹痛 （除了P，Q，R三种的腹痛）","小便疼痛","肛门疼痛","外阴肿痛","乳房胀痛 ","腿肿痛","膝肿痛","腰痛连腿"]
        },
        {
            choose:"radio",
            question:"您最近常有痰或觉得有痰吐不出来吗？ （单选）",
            answer:["没有","痰白清稀","痰多易咳出","痰黄较稠","痰有泡沫、胶黏、不易咳出","痰中带脓血，或腥臭浓痰 ","痰少有时有血丝"]
        },
        {
            choose:"radio",
            question:"您出汗的情况 （单选）",
            answer:["正常","自汗（动则汗出）","盗汗（夜间入眠出汗，醒则汗止 ）","白天晚上都多汗 ","烘热汗出"]
        },
        {
            choose:"radio",
            question:"您食欲情况  （单选）",
            answer:["正常","食欲欠佳","饥不欲食（饿了又不想吃）","消谷善饥","食后腹满、腹胀","不敢多吃","食欲非常不好、厌食"]
        },
        {
            choose:"multiple",
            question:"您的睡眠情况（多选）",
            answer:["正常","入睡困难","易醒","不分时间，总想睡觉","饭后即困","多梦"]
        },
        {
            choose:"multiple",
            question:"水是生命之源，您喝水的情况  （多选）",
            answer:["喝水量正常","平时喝水很少（不渴、不欲饮）","经常口渴又喝得很少（口渴不欲饮）","经常渴，饮水较多（非茶水与饮料）","喜欢喝凉水","喜欢喝热水","冷热水都可以"]
        },
        {
            choose:"multiple",
            question:"您口中的味道和感觉  （多选）",
            answer:["正常","口苦","口甜","口淡（口中无味）","口咸 ","口酸","口黏腻","口干"]
        },
        {
            choose:"radio",
            question:"你的十个指甲上，有白月牙的共有几个",
            answer:["0-1","2","3-7","8","9-10"]
        },
        {
            choose:"radio",
            question:"指甲上白月牙有多大？",
            answer:["不到指甲五分之一","五分之一左右 ","明显大于五分之一 ","边界模糊、不明显"]
        },

        {
            choose:"radio",
            question:"您的性欲情况",
            answer:["正常","性欲亢奋","性欲淡漠（性冷淡）"]
        },
        {
            choose:"multiple",
            question:"男科症状（多选）",
            answer:["睾丸涨痛","射精疼痛","阴茎疼痛","血精","精液清冷","不射精","少精","早泄","遗精","阳萎","房事淡漠（性冷淡、性欲低下@）","性欲亢进","阳强（阴茎异常勃起@）","茎中痛痒","睾丸涨痛（睾丸、附睾疼痛@）","阴囊瘙痒","阴囊湿冷 ","阴汗（阴囊汗出）","阴囊肿大","阴囊时大时小","射精疼痛","射精无力","阴茎硬结","精浊","阴茎溃烂","无以上情况"]
        }
    ];
    var selectQuestion = $("div.selectQuestion");
    var questions = $("section.question");
    var nodeP = questions.find("p");
    var array;
    var questionNum;
    var count = 0;
    var percentage;
    var progress = $(".progress");
    var completeNum = progress.find(".completeNum");
    var totalNum = progress.find(".totalNum");
    var progressBar = progress.find(".progress-bar");
    var quesindexs=[];//所答题目
    var exam_answers=[];//答案数组
    var index = 0;//当前答案数组下表
    init();
    
    //异步读取后台的题目
    function getQuestions(arg) {
    	$.ajax({
    		url:"../diagnosis/questions.do?sex="+arg,	
    		type:"get",
    		dataType:'json',
    		success:function(response){
    			if(response.status=='0'){
    				array=response.results;
    				init2();
    			}else{
    				alert("没有有效的题目!");
    			}	
    		},
    		error:function(){
    			alert("ajax error");
    		}
    	});
    }
    
    function init(){
    	progress.hide();
        $(".firstNext").on("click", function() {

        	count++;
            var sexValue = selectQuestion.find("input[type = 'radio'][name = 'sex']:checked").val();
            progress.show();

            if( "male" === sexValue) {
            	getQuestions(1);
            } else {
            	getQuestions(2);
            }

        });
        prev();
        next();
    }
    
    function init2(){
    	if (array == null) {
			alert("尚在开发题库中.....");
			return;
		}
    	percentage = 100/array.length;
        questionNum = array.length;
        totalNum.text(questionNum);
        nodeP.text(array[0].question);
        var html = createHtml(array[0]);
        selectQuestion.html(html);
        questions.find(".prev").show();
        questions.find(".next").show();
        
        
        changeProgress(count);
    }

    function createHtml( obj ) {
        var html = "";
        var answerArray = obj.choices;
        if ( 1 === obj.type) {

            for( var i = 0; i < answerArray.length; i++ ) {
                html += "<div class = 'radio'><label><input type = 'radio' name = '1' value = '"+ answerArray[i].id +"' />" + answerArray[i].choice +"</label></div>";
            }
            return html;

        } else {
            for ( var i = 0; i< answerArray.length; i++) {
                html += "<div class = 'checkbox'><label><input type = 'checkbox' name = '1' value = '"+ answerArray[i].id +"' />"+answerArray[i].choice+"</label></div>";
            }
            return html;
        }
    }

    function prev() {
        questions.find(".prev").on("click", function() {

            var html = "";
            if( 0 === count) {
//                html = "<div class = 'radio'><label><input type = 'radio' name = 'sex' value = 'female' checked>女</label></div><div class = 'radio'><label><input type = 'radio' name = 'sex' value = 'female' checked>男</label></div>";
            	html = "<div class = 'radio'><label><input type = 'radio' name = 'sex' value = 'female' checked>女</label></div><div class = 'radio'><label><input type = 'radio' name = 'sex' value = 'male' >男</label></div>";
                selectQuestion.html(html);
                nodeP.text("请选择您的性别");
                progress.hide();
                changeProgress(0);
            } else if( count > 0) {
                count=quesindexs.pop();
                index--;
                changeProgress(count);
                var objTmp = array[count];
                html = createHtml(objTmp);
                selectQuestion.html(html);
                nodeP.text(objTmp.question);
            }else {

            }
        });
    }

    function next(){

        questions.find(".next").on("click", function(){
        	
            var value = selectQuestion.find("input:checked").val();
            if( value === undefined ){
                alert("请选择您的答案");
            } else {
            	if (selectQuestion.find("input").attr("type") == 'checkbox') {
            		selectQuestion.find("input:checked").each(function(){
            			var answer={};
                    	answer["question"]=array[count].id;
                    	answer["answer"]=$(this).val();
                    	exam_answers[index] = answer;
                    	index++;
            		});
    			} else {
    				var answer={};
                	answer["question"]=array[count].id;
                	answer["answer"]=value;
                	exam_answers[index] = answer;
                	index++;
    			}
            	quesindexs.push(count);
            	
            	//跳题情况
                while(array[++count] != null 
                		&& array[count].dependency > 0 
                		&& array[count].depchoice != findAns(array[count].dependency,count-1) 
                		&& count <= questionNum) {
                	;
                }
                
                //显示下一题
                var html = "";
                if(count < questionNum ){
                	changeProgress(count);
                    var objTmp = array[count];
                    html = createHtml(objTmp);
                    selectQuestion.html(html);
                    nodeP.text(objTmp.question);
                    
                }else if( count === questionNum) {
                    alert("您已经答完所有题目");
                    $.ajax({
                		url:"../diagnosis/commit.do",	
                		type:"POST",
                		dataType:'json',
                		contentType:"application/json",
                		data:JSON.stringify(exam_answers),
                		success:function(response){
                			if(response.status=='0'){
                				alert("提交成功");
                			}else{
                				alert("提交失败!");
                			}	
                		},
                		error:function(){
                			alert("ajax error");
                		}
                	});
                }

            }
        });
    }
    
    function changeProgress(count) {
        completeNum.text(count);
        var width = percentage * count;
        progressBar.css("width",width+"%");

    }

    //查询某一道题的答案情况
    //id:题号id
    function findAns(id,count) {
    	var ans_id;
    	//如果已经答了这道题，把这道题的所做答案找到id
    	for(i=0;i<exam_answers.length;i++) {
    		if (id == exam_answers[i]["question"]) {
    			ans_id = exam_answers[i]["answer"];
			}
    	}
    	//根据id把选项找到
    	for(i=0;i<array[count].choices.length;i++){
    		if(array[count].choices[i].id==ans_id){
    			return array[count].choices[i].number;
    		}
    	}
    	return "";
    }
});