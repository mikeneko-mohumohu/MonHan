class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {
        skillEquipments: {
          bestHitAttribute:0,//会心撃【属性】
          bestHitParticular:0,//会心撃【特殊】
          thunderEnhance:0,//雷属性攻撃強化
          iceEnhance:0,//氷属性攻撃強化
          sleepEnhance:0,//睡眠属性強化
          poisonEnhance:0,//毒属性強化
          explosionEnhance:0,//爆破属性強化
          hien:0,//飛燕
          fireEnhance:0,//火属性攻撃強化
          paralysisEnhance:0,//麻痺属性強化
          chatch:0,//見切り
          waterEnhance:0,//水属性攻撃強化
          dragonEnhance:0,//龍属性攻撃強化
          attack:0,//攻撃
          challenger:0,//挑戦者
          might:0,//渾身
          specialBestHit:0,//超会心
          resentment:0,//逆恨み
          dragonSealEnhance:0,//龍封力強化
          crisisChance:0,//火事場力
          slideEnhance:0,//滑走強化
          ko:0,//KO術
          weekness:0,//弱点特効
          jump:0,//ジャンプ鉄人
          concentration:0,//集中
          gradStamina:0,//スタミナ奪取
          frankAttribute:0,//属性解放/装填拡張
          artisan:0,//匠
          poisonDamageEnhance:0,//毒ダメージ強化
          bluntInstrument:0,//鈍器使い
          storage:0,//納刀術
          ride:0,//乗り名人
          drawSwordPower:0,//抜刀術【力】
          drawSwordSkill:0,//抜刀術【技】
          flutePlayer:0,//笛吹き名人
          fortitude:0,//不屈
          bombardment:0,//砲撃手
          gunnery:0,//砲術
          bomber:0,//ボマー
          break:0,//破壊王
          forceWake:0,//力の解放
          full:0,//フルチャージ
          enhanceEndure:0,//強化持続
          polish:0,//剛刃研磨
          mindEye:0,//心眼/弾導強化
          expert:0,//達人芸
          fineSword:0,//業物/弾丸節約
          naturalEnhance:0,//無属性強化
          spiritProtection:0,//精霊の加護
          defense:0,//防御
          recoveryRate:0,//回復速度
          physicalRecoveryUp:0,//体力回復UP
          physicalStrength:0,//体力増強
          sporeKnowledge:0,//綿胞子草の知識
          guts:0,//根性
          staminaRecovryUp:0,//スタミナ急速回復
          staminaMaxBreak:0,//スタミナ上限突破
          martialArt:0,//体術
          hungryTolerance:0,//腹減り耐性
          stirringUp:0,//奮起
          runner:0,//ランナー
          avoidDistantUp:0,//回避距離UP
          avoidPower:0,//回避性能
          clymer:0,//クライマー
          sityuu:0,//死中に活
          dive:0,//飛び込み
          guardPower:0,//ガード性能
          guardBuildup:0,//ガード強化
          thunderTolerance:0,//雷耐性
          faintTolerance:0,//気絶耐性
          iceTolerance:0,//氷耐性
          miasmaAdjustment:0,//瘴気環境適応
          sleepTolerance:0,//睡眠耐性
          attributeTolerance:0,//属性やられ耐性
          quakeProof:0,//耐震
          poisonTolerance:0,//毒耐性
          mudTolerance:0,//泥耐性
          bombTolerance:0,//爆破やられ耐性
          fireTolerance:0,//火耐性
          winceTolerance:0,//ひるみ軽減
          windPressureTolerance:0,//風圧耐性
          defenseDownTolerance:0,//防御力DOWN耐性
          paralysisTolerance:0,//麻痺耐性
          waterTolerance:0,//水耐性
          earplug:0,//耳栓
          dragonTolerance:0,//龍耐性
          lacerationTolerance:0,//裂傷耐性
          heatVoid:0,//熱ダメージ無効
          miasmaTolerance:0,//瘴気耐性
          windPressureVoid:0,//風圧完全無効
          gunshotBuildup:0,//特殊射撃強化
          cannonBallUp:0,//砲弾装填数UP
          slugBuildup:0,//散弾・剛射撃強化
          ammoBuildup:0,//通常弾・通常矢強化
          pierceBuildup:0,//貫通弾・竜の一矢強化
          itemBuildup:0,//アイテム使用強化
          fungiLove:0,//キノコ大好き
          widening:0,//広域化
          manure:0,//こやし名人
          preparation:0,//整備
          flashBuildup:0,//閃光強化
          whetstone:0,//砥石使用高速化
          grill:0,//肉焼き名人
          eating:0,//早食い
          gratification:0,//満足感
          transport:0,//運搬の達人
          insect:0,//昆虫標本の達人
          gather:0,//採集の達人
          flora:0,//植生学
          exploraLucky:0,//探索者の幸運
          geology:0,//地質学
          stripping:0,//剥ぎ取り鉄人
          honey:0,//ハニーハンター
          detection:0,//感知
          capture:0,//捕獲名人
          lucky:0,//幸運
          lead:0,//オトモへの采配
          threaten:0,//威嚇
          guideReactionUp:0,//導蟲反応距離UP
          latentia:0,//潜伏
          tracing:0,//追跡の達人
          scholar:0,//研究者
          squat:0,//しゃがみ移動速度UP
          waterPlaceAdjustment:0,//水場適応
          loadingUp:0,//スリンガー装填数UP
          fishing:0//釣り名人
        },
        skills: [
        {name:'会心撃【属性】',level:1},
        {name:'会心撃【特殊】',level:1},
        {name:'雷属性攻撃強化',level:5},
        {name:'氷属性攻撃強化',level:5},
        {name:'睡眠属性強化',level:3},
        {name:'毒属性強化',level:3},
        {name:'爆破属性強化',level:3},
        {name:'飛燕',level:1},
        {name:'火属性攻撃強化',level:5},
        {name:'麻痺属性強化',level:3},
        {name:'見切り',level:7},
        {name:'水属性攻撃強化',level:5},
        {name:'龍属性攻撃強化',level:5},
        {name:'攻撃',level:7},
        {name:'挑戦者',level:5},
        {name:'渾身',level:3},
        {name:'超会心',level:3},
        {name:'逆恨み',level:2},
        {name:'龍封力強化',level:1},
        {name:'火事場力',level:5},
        {name:'滑走強化',level:1},
        {name:'KO術',level:3},
        {name:'弱点特効',level:3},
        {name:'ジャンプ鉄人',level:1},
        {name:'集中',level:3},
        {name:'スタミナ奪取',level:3},
        {name:'属性解放/装填拡張',level:3},
        {name:'匠',level:5},
        {name:'毒ダメージ強化',level:1},
        {name:'鈍器使い',level:1},
        {name:'納刀術',level:3},
        {name:'乗り名人',level:1},
        {name:'抜刀術【力】',level:1},
        {name:'抜刀術【技】',level:3},
        {name:'笛吹き名人',level:1},
        {name:'不屈',level:1},
        {name:'砲撃手',level:2},
        {name:'砲術',level:3},
        {name:'ボマー',level:3},
        {name:'破壊王',level:3},
        {name:'力の解放',level:5},
        {name:'フルチャージ',level:3},
        {name:'強化持続',level:3},
        {name:'剛刃研磨',level:1},
        {name:'心眼/弾導強化',level:1},
        {name:'達人芸',level:1},
        {name:'業物/弾丸節約',level:1},
        {name:'無属性強化',level:1},
        {name:'精霊の加護',level:3},
        {name:'防御',level:7},
        {name:'回復速度',level:3},
        {name:'体力回復UP',level:3},
        {name:'体力増強',level:3},
        {name:'綿胞子草の知識',level:3},
        {name:'根性',level:1},
        {name:'スタミナ急速回復',level:3},
        {name:'スタミナ上限突破',level:1},
        {name:'体術',level:5},
        {name:'腹減り耐性',level:3},
        {name:'奮起',level:1},
        {name:'ランナー',level:3},
        {name:'回避距離UP',level:3},
        {name:'回避性能',level:5},
        {name:'クライマー',level:1},
        {name:'死中に活',level:1},
        {name:'飛び込み',level:1},
        {name:'ガード性能',level:5},
        {name:'ガード強化',level:1},
        {name:'雷耐性',level:3},
        {name:'気絶耐性',level:3},
        {name:'氷耐性',level:3},
        {name:'瘴気環境適応',level:1},
        {name:'睡眠耐性',level:3},
        {name:'属性やられ耐性',level:3},
        {name:'耐震',level:3},
        {name:'毒耐性',level:3},
        {name:'泥耐性',level:1},
        {name:'爆破やられ耐性',level:3},
        {name:'火耐性',level:3},
        {name:'ひるみ軽減',level:3},
        {name:'風圧耐性',level:5},
        {name:'防御力DOWN耐性',level:3},
        {name:'麻痺耐性',level:3},
        {name:'水耐性',level:3},
        {name:'耳栓',level:5},
        {name:'龍耐性',level:3},
        {name:'裂傷耐性',level:3},
        {name:'熱ダメージ無効',level:1},
        {name:'瘴気耐性',level:3},
        {name:'風圧完全無効',level:1},
        {name:'特殊射撃強化',level:2},
        {name:'砲弾装填数UP',level:1},
        {name:'散弾・剛射撃強化',level:1},
        {name:'通常弾・通常矢強化',level:1},
        {name:'貫通弾・竜の一矢強化',level:1},
        {name:'アイテム使用強化',level:3},
        {name:'キノコ大好き',level:3},
        {name:'広域化',level:5},
        {name:'こやし名人',level:1},
        {name:'整備',level:3},
        {name:'閃光強化',level:1},
        {name:'砥石使用高速化',level:3},
        {name:'肉焼き名人',level:1},
        {name:'早食い',level:3},
        {name:'満足感',level:1},
        {name:'運搬の達人',level:1},
        {name:'昆虫標本の達人',level:3},
        {name:'採集の達人',level:1},
        {name:'植生学',level:4},
        {name:'探索者の幸運',level:1},
        {name:'地質学',level:3},
        {name:'剥ぎ取り鉄人',level:1},
        {name:'ハニーハンター',level:1},
        {name:'感知',level:1},
        {name:'捕獲名人',level:1},
        {name:'幸運',level:1},
        {name:'オトモへの采配',level:5},
        {name:'威嚇',level:3},
        {name:'導蟲反応距離UP',level:1},
        {name:'潜伏',level:3},
        {name:'追跡の達人',level:1},
        {name:'研究者',level:1},
        {name:'しゃがみ移動速度UP',level:1},
        {name:'水場適応',level:3},
        {name:'スリンガー装填数UP',level:3},
        {name:'釣り名人',level:1}
        ],
        items: [],
        headEquipments: [
        {name:'クルル',fireTolerance:1},
        {name:'ジャグラス',eating:1},
        {name:'チェーン',gather:1},
        {name:'ハンター',guideReactionUp:1},
        {name:'ボーン',physicalStrength:1},
        {name:'ランゴ',storage:1},
        {name:'アロイ',windPressureTolerance:1},
        {name:'カガチ',martialArt:1},
        {name:'ジュラ',waterPlaceAdjustment:1},
        {name:'プケプケ',sporeKnowledge:1},
        {name:'ボロス',guardPower:1},
        {name:'ウルムー',staminaRecovryUp:1},
        {name:'オウビート',avoidPower:1},
        {name:'ギルオス',flutePlayer:1},
        {name:'ジャナフ',fireEnhance:1},
        {name:'タロス',manure:1},
        {name:'ツィツィ',flashBuildup:1},
        {name:'ハイメタ',iceTolerance:1},
        {name:'バルキン',KO:1},
        {name:'レイア',physicalStrength:1}
        ],
        bodyEquipments: [
        {name:'クルル',staminaRecovryUp:1},
        {name:'ジャグラス',threaten:1},
        {name:'チェーン'},
        {name:'ハンター',loadingUp:1},
        {name:'ボーン',attack:1},
        {name:'ランゴ',windPressureTolerance:1},
        {name:'アロイ',waterTolerance:1},
        {name:'カガチ',jump:1},
        {name:'ジュラ',mudTolerance:1},
        {name:'プケプケ',itemBuildup:1},
        {name:'ボロス',gradStamina:1},
        {name:'ウルムー',ride:1},
        {name:'オウビート',storage:1},
        {name:'ギルオス',paralysisTolerance:1},
        {name:'ジャナフ',runner:1},
        {name:'タロス',miasmaAdjustment:1},
        {name:'ツィツィ',martialArt:1},
        {name:'ハイメタ',earplug:1},
        {name:'バルキン',sleepTolerance:1},
        {name:'レイア',flora:1}
        ],
        armEquipments: [
        {name:'クルル',transport:1},
        {name:'ジャグラス',lead:1},
        {name:'チェーン'},
        {name:'ハンター',latentia:1},
        {name:'ボーン',ko:1},
        {name:'ランゴ',paralysisEnhance:1},
        {name:'アロイ',defense:1},
        {name:'カガチ',avoidDistantUp:1},
        {name:'ジュラ',waterEnhance:1},
        {name:'プケプケ',poisonTolerance:1},
        {name:'ボロス',runner:1},
        {name:'ウルムー',gunnery:1},
        {name:'オウビート',dive:1},
        {name:'ギルオス',lead:1},
        {name:'ジャナフ',gunshotBuildup:1},
        {name:'タロス',gratification:1},
        {name:'ツィツィ',gunshotBuildup:1},
        {name:'ハイメタ',defense:1},
        {name:'バルキン',sleepEnhance:1},
        {name:'レイア',poisonEnhance:1}
        ],
        waistEquipments: [
        {name:'クルル',itemBuildup:1},
        {name:'ジャグラス',fortitude:1},
        {name:'チェーン'},
        {name:'ハンター',tracing:1},
        {name:'ボーン',flutePlayer:1},
        {name:'ランゴ',paralysisTolerance:1},
        {name:'アロイ',poisonTolerance:1},
        {name:'カガチ',thunderEnhance:1},
        {name:'ジュラ',iceTolerance:1},
        {name:'プケプケ',poisonEnhance:1},
        {name:'ボロス',mudTolerance:1},
        {name:'ウルムー',spiritProtection:1},
        {name:'オウビート',honey:1},
        {name:'ギルオス',miasmaAdjustment:1},
        {name:'ジャナフ',fireTolerance:1},
        {name:'タロス',stripping:1},
        {name:'ツィツィ',widening:1},
        {name:'ハイメタ',cannonBallUp:1},
        {name:'バルキン',guardPower:1},
        {name:'レイア',poisonTolerance:1}
        ],
        legEquipments: [
        {name:'クルル',chatch:1},
        {name:'ジャグラス',squat:1},
        {name:'チェーン'},
        {name:'ハンター',grill:1},
        {name:'ボーン',insect:1},
        {name:'ランゴ',honey:1},
        {name:'アロイ',whetstone:1},
        {name:'カガチ',thunderTolerance:1},
        {name:'ジュラ',concentration:1},
        {name:'プケプケ',flora:1},
        {name:'ボロス',faintTolerance:1},
        {name:'ウルムー',windPressureTolerance:1},
        {name:'オウビート',scholar:1},
        {name:'ギルオス',paralysisEnhance:1},
        {name:'ジャナフ',gunnery:1},
        {name:'タロス',artisan:1},
        {name:'ツィツィ',sleepTolerance:1},
        {name:'ハイメタ',bombardment:1},
        {name:'バルキン',lacerationTolerance:1},
        {name:'レイア',physicalRecoveryUp:1}
        ]
      };
    }

    render() {
      return (
        <div>
          <h3>シミュ</h3>
          <form onSubmit={this.handleSubmit}>
            <CheckList skills={this.state.skills} handleChange={this.handleChange}/>
            <button>検索</button>
            <EquipmentList equipment={this.state.items}/>
          </form>
        </div>
      );
    }

    handleChange(event) {
      var skillEquipments = this.state.skillEquipments;

      // this.setState({ステータス名: 更新内容})
      switch (event.target.name) {
      case '会心撃【属性】':skillEquipments.bestHitAttribute = event.target.value;break;
      case '会心撃【特殊】':skillEquipments.bestHitParticular = event.target.value;break;
      case '雷属性攻撃強化':skillEquipments.thunderEnhance = event.target.value;break;
      case '氷属性攻撃強化':skillEquipments.iceEnhance = event.target.value;break;
      case '睡眠属性強化':skillEquipments.sleepEnhance = event.target.value;break;
      case '毒属性強化':skillEquipments.poisonEnhance = event.target.value;break;
      case '爆破属性強化':skillEquipments.explosionEnhance = event.target.value;break;
      case '飛燕':skillEquipments.hien = event.target.value;break;
      case '火属性攻撃強化':skillEquipments.fireEnhance = event.target.value;break;
      case '麻痺属性強化':skillEquipments.paralysisEnhance = event.target.value;break;
      case '見切り':skillEquipments.chatch = event.target.value;break;
      case '水属性攻撃強化':skillEquipments.waterEnhance = event.target.value;break;
      case '龍属性攻撃強化':skillEquipments.dragonEnhance = event.target.value;break;
      case '攻撃':skillEquipments.attack = event.target.value;break;
      case '挑戦者':skillEquipments.challenger = event.target.value;break;
      case '渾身':skillEquipments.might = event.target.value;break;
      case '超会心':skillEquipments.specialBestHit = event.target.value;break;
      case '逆恨み':skillEquipments.resentment = event.target.value;break;
      case '龍封力強化':skillEquipments.dragonSealEnhance = event.target.value;break;
      case '火事場力':skillEquipments.crisisChance = event.target.value;break;
      case '滑走強化':skillEquipments.slideEnhance = event.target.value;break;
      case 'KO術':skillEquipments.ko = event.target.value;break;
      case '弱点特効':skillEquipments.weekness = event.target.value;break;
      case 'ジャンプ鉄人':skillEquipments.jump = event.target.value;break;
      case '集中':skillEquipments.concentration = event.target.value;break;
      case 'スタミナ奪取':skillEquipments.gradStamina = event.target.value;break;
      case '属性解放/装填拡張':skillEquipments.frankAttribute = event.target.value;break;
      case '匠':skillEquipments.artisan = event.target.value;break;
      case '毒ダメージ強化':skillEquipments.poisonDamageEnhance = event.target.value;break;
      case '鈍器使い':skillEquipments.bluntInstrument = event.target.value;break;
      case '納刀術':skillEquipments.storage = event.target.value;break;
      case '乗り名人':skillEquipments.ride = event.target.value;break;
      case '抜刀術【力】':skillEquipments.drawSwordPower = event.target.value;break;
      case '抜刀術【技】':skillEquipments.drawSwordSkill = event.target.value;break;
      case '笛吹き名人':skillEquipments.flutePlayer = event.target.value;break;
      case '不屈':skillEquipments.fortitude = event.target.value;break;
      case '砲撃手':skillEquipments.bombardment = event.target.value;break;
      case '砲術':skillEquipments.gunnery = event.target.value;break;
      case 'ボマー':skillEquipments.bomber = event.target.value;break;
      case '破壊王':skillEquipments.break = event.target.value;break;
      case '力の解放':skillEquipments.forceWake = event.target.value;break;
      case 'フルチャージ':skillEquipments.full = event.target.value;break;
      case '強化持続':skillEquipments.enhanceEndure = event.target.value;break;
      case '剛刃研磨':skillEquipments.polish = event.target.value;break;
      case '心眼/弾導強化':skillEquipments.mindEye = event.target.value;break;
      case '達人芸':skillEquipments.expert = event.target.value;break;
      case '業物/弾丸節約':skillEquipments.fineSword = event.target.value;break;
      case '無属性強化':skillEquipments.naturalEnhance = event.target.value;break;
      case '精霊の加護':skillEquipments.spiritProtection = event.target.value;break;
      case '防御':skillEquipments.defense = event.target.value;break;
      case '回復速度':skillEquipments.recoveryRate = event.target.value;break;
      case '体力回復UP':skillEquipments.physicalRecoveryUp = event.target.value;break;
      case '体力増強':skillEquipments.physicalStrength = event.target.value;break;
      case '綿胞子草の知識':skillEquipments.sporeKnowledge = event.target.value;break;
      case '根性':skillEquipments.guts = event.target.value;break;
      case 'スタミナ急速回復':skillEquipments.staminaRecovryUp = event.target.value;break;
      case 'スタミナ上限突破':skillEquipments.staminaMaxBreak = event.target.value;break;
      case '体術':skillEquipments.martialArt = event.target.value;break;
      case '腹減り耐性':skillEquipments.hungryTolerance = event.target.value;break;
      case '奮起':skillEquipments.stirringUp = event.target.value;break;
      case 'ランナー':skillEquipments.runner = event.target.value;break;
      case '回避距離UP':skillEquipments.avoidDistantUp = event.target.value;break;
      case '回避性能':skillEquipments.avoidPower = event.target.value;break;
      case 'クライマー':skillEquipments.clymer = event.target.value;break;
      case '死中に活':skillEquipments.sityuu = event.target.value;break;
      case '飛び込み':skillEquipments.dive = event.target.value;break;
      case 'ガード性能':skillEquipments.guardPower = event.target.value;break;
      case 'ガード強化':skillEquipments.guardBuildup = event.target.value;break;
      case '雷耐性':skillEquipments.thunderTolerance = event.target.value;break;
      case '気絶耐性':skillEquipments.faintTolerance = event.target.value;break;
      case '氷耐性':skillEquipments.iceTolerance = event.target.value;break;
      case '瘴気環境適応':skillEquipments.miasmaAdjustment = event.target.value;break;
      case '睡眠耐性':skillEquipments.sleepTolerance = event.target.value;break;
      case '属性やられ耐性':skillEquipments.attributeTolerance = event.target.value;break;
      case '耐震':skillEquipments.quakeProof = event.target.value;break;
      case '毒耐性':skillEquipments.poisonTolerance = event.target.value;break;
      case '泥耐性':skillEquipments.mudTolerance = event.target.value;break;
      case '爆破やられ耐性':skillEquipments.bombTolerance = event.target.value;break;
      case '火耐性':skillEquipments.fireTolerance = event.target.value;break;
      case 'ひるみ軽減':skillEquipments.winceTolerance = event.target.value;break;
      case '風圧耐性':skillEquipments.windPressureTolerance = event.target.value;break;
      case '防御力DOWN耐性':skillEquipments.defenseDownTolerance = event.target.value;break;
      case '麻痺耐性':skillEquipments.paralysisTolerance = event.target.value;break;
      case '水耐性':skillEquipments.waterTolerance = event.target.value;break;
      case '耳栓':skillEquipments.earplug = event.target.value;break;
      case '龍耐性':skillEquipments.dragonTolerance = event.target.value;break;
      case '裂傷耐性':skillEquipments.lacerationTolerance = event.target.value;break;
      case '熱ダメージ無効':skillEquipments.heatVoid = event.target.value;break;
      case '瘴気耐性':skillEquipments.miasmaTolerance = event.target.value;break;
      case '風圧完全無効':skillEquipments.windPressureVoid = event.target.value;break;
      case '特殊射撃強化':skillEquipments.gunshotBuildup = event.target.value;break;
      case '砲弾装填数UP':skillEquipments.cannonBallUp = event.target.value;break;
      case '散弾・剛射撃強化':skillEquipments.slugBuildup = event.target.value;break;
      case '通常弾・通常矢強化':skillEquipments.ammoBuildup = event.target.value;break;
      case '貫通弾・竜の一矢強化':skillEquipments.pierceBuildup = event.target.value;break;
      case 'アイテム使用強化':skillEquipments.itemBuildup = event.target.value;break;
      case 'キノコ大好き':skillEquipments.fungiLove = event.target.value;break;
      case '広域化':skillEquipments.widening = event.target.value;break;
      case 'こやし名人':skillEquipments.manure = event.target.value;break;
      case '整備':skillEquipments.preparation = event.target.value;break;
      case '閃光強化':skillEquipments.flashBuildup = event.target.value;break;
      case '砥石使用高速化':skillEquipments.whetstone = event.target.value;break;
      case '肉焼き名人':skillEquipments.grill = event.target.value;break;
      case '早食い':skillEquipments.eating = event.target.value;break;
      case '満足感':skillEquipments.gratification = event.target.value;break;
      case '運搬の達人':skillEquipments.transport = event.target.value;break;
      case '昆虫標本の達人':skillEquipments.insect = event.target.value;break;
      case '採集の達人':skillEquipments.gather = event.target.value;break;
      case '植生学':skillEquipments.flora = event.target.value;break;
      case '探索者の幸運':skillEquipments.exploraLucky = event.target.value;break;
      case '地質学':skillEquipments.geology = event.target.value;break;
      case '剥ぎ取り鉄人':skillEquipments.stripping = event.target.value;break;
      case 'ハニーハンター':skillEquipments.honey = event.target.value;break;
      case '感知':skillEquipments.detection = event.target.value;break;
      case '捕獲名人':skillEquipments.capture = event.target.value;break;
      case '幸運':skillEquipments.lucky = event.target.value;break;
      case 'オトモへの采配':skillEquipments.lead = event.target.value;break;
      case '威嚇':skillEquipments.threaten = event.target.value;break;
      case '導蟲反応距離UP':skillEquipments.guideReactionUp = event.target.value;break;
      case '潜伏':skillEquipments.latentia = event.target.value;break;
      case '追跡の達人':skillEquipments.tracing = event.target.value;break;
      case '研究者':skillEquipments.scholar = event.target.value;break;
      case 'しゃがみ移動速度UP':skillEquipments.squat = event.target.value;break;
      case '水場適応':skillEquipments.waterPlaceAdjustment = event.target.value;break;
      case 'スリンガー装填数UP':skillEquipments.loadingUp = event.target.value;break;
      case '釣り名人':skillEquipments.fishing = event.target.value;break;
      }
      this.setState({skillEquipments: skillEquipments});
      console.log(this.state.skillEquipments);
    }

    handleSubmit(event) {
      event.preventDefault();//サブミット止める
      var myItems = [];
                                            console.log('開始');
      //OPTIMIZE 5重ループとか絶対変・・・やり方考える
      for (var headNum in this.state.headEquipments) {
        for (var bodyNum in this.state.bodyEquipments) {
          for (var armNum in this.state.armEquipments) {
            for (var waistNum in this.state.waistEquipments) {
              for (var legNum in this.state.legEquipments) {
                var head = this.state.headEquipments[headNum];
                var body = this.state.bodyEquipments[bodyNum];
                var arm = this.state.armEquipments[armNum];
                var waist = this.state.waistEquipments[waistNum];
                var leg = this.state.legEquipments[legNum];
                if (
                increment(head.bestHitAttribute)+increment(body.bestHitAttribute)+increment(arm.bestHitAttribute)+increment(waist.bestHitAttribute)+increment(leg.bestHitAttribute)>=this.state.skillEquipments.bestHitAttribute&&
                increment(head.bestHitParticular)+increment(body.bestHitParticular)+increment(arm.bestHitParticular)+increment(waist.bestHitParticular)+increment(leg.bestHitParticular)>=this.state.skillEquipments.bestHitParticular&&
                increment(head.thunderEnhance)+increment(body.thunderEnhance)+increment(arm.thunderEnhance)+increment(waist.thunderEnhance)+increment(leg.thunderEnhance)>=this.state.skillEquipments.thunderEnhance&&
                increment(head.iceEnhance)+increment(body.iceEnhance)+increment(arm.iceEnhance)+increment(waist.iceEnhance)+increment(leg.iceEnhance)>=this.state.skillEquipments.iceEnhance&&
                increment(head.sleepEnhance)+increment(body.sleepEnhance)+increment(arm.sleepEnhance)+increment(waist.sleepEnhance)+increment(leg.sleepEnhance)>=this.state.skillEquipments.sleepEnhance&&
                increment(head.poisonEnhance)+increment(body.poisonEnhance)+increment(arm.poisonEnhance)+increment(waist.poisonEnhance)+increment(leg.poisonEnhance)>=this.state.skillEquipments.poisonEnhance&&
                increment(head.explosionEnhance)+increment(body.explosionEnhance)+increment(arm.explosionEnhance)+increment(waist.explosionEnhance)+increment(leg.explosionEnhance)>=this.state.skillEquipments.explosionEnhance&&
                increment(head.hien)+increment(body.hien)+increment(arm.hien)+increment(waist.hien)+increment(leg.hien)>=this.state.skillEquipments.hien&&
                increment(head.fireEnhance)+increment(body.fireEnhance)+increment(arm.fireEnhance)+increment(waist.fireEnhance)+increment(leg.fireEnhance)>=this.state.skillEquipments.fireEnhance&&
                increment(head.paralysisEnhance)+increment(body.paralysisEnhance)+increment(arm.paralysisEnhance)+increment(waist.paralysisEnhance)+increment(leg.paralysisEnhance)>=this.state.skillEquipments.paralysisEnhance&&
                increment(head.chatch)+increment(body.chatch)+increment(arm.chatch)+increment(waist.chatch)+increment(leg.chatch)>=this.state.skillEquipments.chatch&&
                increment(head.waterEnhance)+increment(body.waterEnhance)+increment(arm.waterEnhance)+increment(waist.waterEnhance)+increment(leg.waterEnhance)>=this.state.skillEquipments.waterEnhance&&
                increment(head.dragonEnhance)+increment(body.dragonEnhance)+increment(arm.dragonEnhance)+increment(waist.dragonEnhance)+increment(leg.dragonEnhance)>=this.state.skillEquipments.dragonEnhance&&
                increment(head.attack)+increment(body.attack)+increment(arm.attack)+increment(waist.attack)+increment(leg.attack)>=this.state.skillEquipments.attack&&
                increment(head.challenger)+increment(body.challenger)+increment(arm.challenger)+increment(waist.challenger)+increment(leg.challenger)>=this.state.skillEquipments.challenger&&
                increment(head.might)+increment(body.might)+increment(arm.might)+increment(waist.might)+increment(leg.might)>=this.state.skillEquipments.might&&
                increment(head.specialBestHit)+increment(body.specialBestHit)+increment(arm.specialBestHit)+increment(waist.specialBestHit)+increment(leg.specialBestHit)>=this.state.skillEquipments.specialBestHit&&
                increment(head.resentment)+increment(body.resentment)+increment(arm.resentment)+increment(waist.resentment)+increment(leg.resentment)>=this.state.skillEquipments.resentment&&
                increment(head.dragonSealEnhance)+increment(body.dragonSealEnhance)+increment(arm.dragonSealEnhance)+increment(waist.dragonSealEnhance)+increment(leg.dragonSealEnhance)>=this.state.skillEquipments.dragonSealEnhance&&
                increment(head.crisisChance)+increment(body.crisisChance)+increment(arm.crisisChance)+increment(waist.crisisChance)+increment(leg.crisisChance)>=this.state.skillEquipments.crisisChance&&
                increment(head.slideEnhance)+increment(body.slideEnhance)+increment(arm.slideEnhance)+increment(waist.slideEnhance)+increment(leg.slideEnhance)>=this.state.skillEquipments.slideEnhance&&
                increment(head.ko)+increment(body.ko)+increment(arm.ko)+increment(waist.ko)+increment(leg.ko)>=this.state.skillEquipments.ko&&
                increment(head.weekness)+increment(body.weekness)+increment(arm.weekness)+increment(waist.weekness)+increment(leg.weekness)>=this.state.skillEquipments.weekness&&
                increment(head.jump)+increment(body.jump)+increment(arm.jump)+increment(waist.jump)+increment(leg.jump)>=this.state.skillEquipments.jump&&
                increment(head.concentration)+increment(body.concentration)+increment(arm.concentration)+increment(waist.concentration)+increment(leg.concentration)>=this.state.skillEquipments.concentration&&
                increment(head.gradStamina)+increment(body.gradStamina)+increment(arm.gradStamina)+increment(waist.gradStamina)+increment(leg.gradStamina)>=this.state.skillEquipments.gradStamina&&
                increment(head.frankAttribute)+increment(body.frankAttribute)+increment(arm.frankAttribute)+increment(waist.frankAttribute)+increment(leg.frankAttribute)>=this.state.skillEquipments.frankAttribute&&
                increment(head.artisan)+increment(body.artisan)+increment(arm.artisan)+increment(waist.artisan)+increment(leg.artisan)>=this.state.skillEquipments.artisan&&
                increment(head.poisonDamageEnhance)+increment(body.poisonDamageEnhance)+increment(arm.poisonDamageEnhance)+increment(waist.poisonDamageEnhance)+increment(leg.poisonDamageEnhance)>=this.state.skillEquipments.poisonDamageEnhance&&
                increment(head.bluntInstrument)+increment(body.bluntInstrument)+increment(arm.bluntInstrument)+increment(waist.bluntInstrument)+increment(leg.bluntInstrument)>=this.state.skillEquipments.bluntInstrument&&
                increment(head.storage)+increment(body.storage)+increment(arm.storage)+increment(waist.storage)+increment(leg.storage)>=this.state.skillEquipments.storage&&
                increment(head.ride)+increment(body.ride)+increment(arm.ride)+increment(waist.ride)+increment(leg.ride)>=this.state.skillEquipments.ride&&
                increment(head.drawSwordPower)+increment(body.drawSwordPower)+increment(arm.drawSwordPower)+increment(waist.drawSwordPower)+increment(leg.drawSwordPower)>=this.state.skillEquipments.drawSwordPower&&
                increment(head.drawSwordSkill)+increment(body.drawSwordSkill)+increment(arm.drawSwordSkill)+increment(waist.drawSwordSkill)+increment(leg.drawSwordSkill)>=this.state.skillEquipments.drawSwordSkill&&
                increment(head.flutePlayer)+increment(body.flutePlayer)+increment(arm.flutePlayer)+increment(waist.flutePlayer)+increment(leg.flutePlayer)>=this.state.skillEquipments.flutePlayer&&
                increment(head.fortitude)+increment(body.fortitude)+increment(arm.fortitude)+increment(waist.fortitude)+increment(leg.fortitude)>=this.state.skillEquipments.fortitude&&
                increment(head.bombardment)+increment(body.bombardment)+increment(arm.bombardment)+increment(waist.bombardment)+increment(leg.bombardment)>=this.state.skillEquipments.bombardment&&
                increment(head.gunnery)+increment(body.gunnery)+increment(arm.gunnery)+increment(waist.gunnery)+increment(leg.gunnery)>=this.state.skillEquipments.gunnery&&
                increment(head.bomber)+increment(body.bomber)+increment(arm.bomber)+increment(waist.bomber)+increment(leg.bomber)>=this.state.skillEquipments.bomber&&
                increment(head.break)+increment(body.break)+increment(arm.break)+increment(waist.break)+increment(leg.break)>=this.state.skillEquipments.break&&
                increment(head.forceWake)+increment(body.forceWake)+increment(arm.forceWake)+increment(waist.forceWake)+increment(leg.forceWake)>=this.state.skillEquipments.forceWake&&
                increment(head.full)+increment(body.full)+increment(arm.full)+increment(waist.full)+increment(leg.full)>=this.state.skillEquipments.full&&
                increment(head.enhanceEndure)+increment(body.enhanceEndure)+increment(arm.enhanceEndure)+increment(waist.enhanceEndure)+increment(leg.enhanceEndure)>=this.state.skillEquipments.enhanceEndure&&
                increment(head.polish)+increment(body.polish)+increment(arm.polish)+increment(waist.polish)+increment(leg.polish)>=this.state.skillEquipments.polish&&
                increment(head.mindEye)+increment(body.mindEye)+increment(arm.mindEye)+increment(waist.mindEye)+increment(leg.mindEye)>=this.state.skillEquipments.mindEye&&
                increment(head.expert)+increment(body.expert)+increment(arm.expert)+increment(waist.expert)+increment(leg.expert)>=this.state.skillEquipments.expert&&
                increment(head.fineSword)+increment(body.fineSword)+increment(arm.fineSword)+increment(waist.fineSword)+increment(leg.fineSword)>=this.state.skillEquipments.fineSword&&
                increment(head.naturalEnhance)+increment(body.naturalEnhance)+increment(arm.naturalEnhance)+increment(waist.naturalEnhance)+increment(leg.naturalEnhance)>=this.state.skillEquipments.naturalEnhance&&
                increment(head.spiritProtection)+increment(body.spiritProtection)+increment(arm.spiritProtection)+increment(waist.spiritProtection)+increment(leg.spiritProtection)>=this.state.skillEquipments.spiritProtection&&
                increment(head.defense)+increment(body.defense)+increment(arm.defense)+increment(waist.defense)+increment(leg.defense)>=this.state.skillEquipments.defense&&
                increment(head.recoveryRate)+increment(body.recoveryRate)+increment(arm.recoveryRate)+increment(waist.recoveryRate)+increment(leg.recoveryRate)>=this.state.skillEquipments.recoveryRate&&
                increment(head.physicalRecoveryUp)+increment(body.physicalRecoveryUp)+increment(arm.physicalRecoveryUp)+increment(waist.physicalRecoveryUp)+increment(leg.physicalRecoveryUp)>=this.state.skillEquipments.physicalRecoveryUp&&
                increment(head.physicalStrength)+increment(body.physicalStrength)+increment(arm.physicalStrength)+increment(waist.physicalStrength)+increment(leg.physicalStrength)>=this.state.skillEquipments.physicalStrength&&
                increment(head.sporeKnowledge)+increment(body.sporeKnowledge)+increment(arm.sporeKnowledge)+increment(waist.sporeKnowledge)+increment(leg.sporeKnowledge)>=this.state.skillEquipments.sporeKnowledge&&
                increment(head.guts)+increment(body.guts)+increment(arm.guts)+increment(waist.guts)+increment(leg.guts)>=this.state.skillEquipments.guts&&
                increment(head.staminaRecovryUp)+increment(body.staminaRecovryUp)+increment(arm.staminaRecovryUp)+increment(waist.staminaRecovryUp)+increment(leg.staminaRecovryUp)>=this.state.skillEquipments.staminaRecovryUp&&
                increment(head.staminaMaxBreak)+increment(body.staminaMaxBreak)+increment(arm.staminaMaxBreak)+increment(waist.staminaMaxBreak)+increment(leg.staminaMaxBreak)>=this.state.skillEquipments.staminaMaxBreak&&
                increment(head.martialArt)+increment(body.martialArt)+increment(arm.martialArt)+increment(waist.martialArt)+increment(leg.martialArt)>=this.state.skillEquipments.martialArt&&
                increment(head.hungryTolerance)+increment(body.hungryTolerance)+increment(arm.hungryTolerance)+increment(waist.hungryTolerance)+increment(leg.hungryTolerance)>=this.state.skillEquipments.hungryTolerance&&
                increment(head.stirringUp)+increment(body.stirringUp)+increment(arm.stirringUp)+increment(waist.stirringUp)+increment(leg.stirringUp)>=this.state.skillEquipments.stirringUp&&
                increment(head.runner)+increment(body.runner)+increment(arm.runner)+increment(waist.runner)+increment(leg.runner)>=this.state.skillEquipments.runner&&
                increment(head.avoidDistantUp)+increment(body.avoidDistantUp)+increment(arm.avoidDistantUp)+increment(waist.avoidDistantUp)+increment(leg.avoidDistantUp)>=this.state.skillEquipments.avoidDistantUp&&
                increment(head.avoidPower)+increment(body.avoidPower)+increment(arm.avoidPower)+increment(waist.avoidPower)+increment(leg.avoidPower)>=this.state.skillEquipments.avoidPower&&
                increment(head.clymer)+increment(body.clymer)+increment(arm.clymer)+increment(waist.clymer)+increment(leg.clymer)>=this.state.skillEquipments.clymer&&
                increment(head.sityuu)+increment(body.sityuu)+increment(arm.sityuu)+increment(waist.sityuu)+increment(leg.sityuu)>=this.state.skillEquipments.sityuu&&
                increment(head.dive)+increment(body.dive)+increment(arm.dive)+increment(waist.dive)+increment(leg.dive)>=this.state.skillEquipments.dive&&
                increment(head.guardPower)+increment(body.guardPower)+increment(arm.guardPower)+increment(waist.guardPower)+increment(leg.guardPower)>=this.state.skillEquipments.guardPower&&
                increment(head.guardBuildup)+increment(body.guardBuildup)+increment(arm.guardBuildup)+increment(waist.guardBuildup)+increment(leg.guardBuildup)>=this.state.skillEquipments.guardBuildup&&
                increment(head.thunderTolerance)+increment(body.thunderTolerance)+increment(arm.thunderTolerance)+increment(waist.thunderTolerance)+increment(leg.thunderTolerance)>=this.state.skillEquipments.thunderTolerance&&
                increment(head.faintTolerance)+increment(body.faintTolerance)+increment(arm.faintTolerance)+increment(waist.faintTolerance)+increment(leg.faintTolerance)>=this.state.skillEquipments.faintTolerance&&
                increment(head.iceTolerance)+increment(body.iceTolerance)+increment(arm.iceTolerance)+increment(waist.iceTolerance)+increment(leg.iceTolerance)>=this.state.skillEquipments.iceTolerance&&
                increment(head.miasmaAdjustment)+increment(body.miasmaAdjustment)+increment(arm.miasmaAdjustment)+increment(waist.miasmaAdjustment)+increment(leg.miasmaAdjustment)>=this.state.skillEquipments.miasmaAdjustment&&
                increment(head.sleepTolerance)+increment(body.sleepTolerance)+increment(arm.sleepTolerance)+increment(waist.sleepTolerance)+increment(leg.sleepTolerance)>=this.state.skillEquipments.sleepTolerance&&
                increment(head.attributeTolerance)+increment(body.attributeTolerance)+increment(arm.attributeTolerance)+increment(waist.attributeTolerance)+increment(leg.attributeTolerance)>=this.state.skillEquipments.attributeTolerance&&
                increment(head.quakeProof)+increment(body.quakeProof)+increment(arm.quakeProof)+increment(waist.quakeProof)+increment(leg.quakeProof)>=this.state.skillEquipments.quakeProof&&
                increment(head.poisonTolerance)+increment(body.poisonTolerance)+increment(arm.poisonTolerance)+increment(waist.poisonTolerance)+increment(leg.poisonTolerance)>=this.state.skillEquipments.poisonTolerance&&
                increment(head.mudTolerance)+increment(body.mudTolerance)+increment(arm.mudTolerance)+increment(waist.mudTolerance)+increment(leg.mudTolerance)>=this.state.skillEquipments.mudTolerance&&
                increment(head.bombTolerance)+increment(body.bombTolerance)+increment(arm.bombTolerance)+increment(waist.bombTolerance)+increment(leg.bombTolerance)>=this.state.skillEquipments.bombTolerance&&
                increment(head.fireTolerance)+increment(body.fireTolerance)+increment(arm.fireTolerance)+increment(waist.fireTolerance)+increment(leg.fireTolerance)>=this.state.skillEquipments.fireTolerance&&
                increment(head.winceTolerance)+increment(body.winceTolerance)+increment(arm.winceTolerance)+increment(waist.winceTolerance)+increment(leg.winceTolerance)>=this.state.skillEquipments.winceTolerance&&
                increment(head.windPressureTolerance)+increment(body.windPressureTolerance)+increment(arm.windPressureTolerance)+increment(waist.windPressureTolerance)+increment(leg.windPressureTolerance)>=this.state.skillEquipments.windPressureTolerance&&
                increment(head.defenseDownTolerance)+increment(body.defenseDownTolerance)+increment(arm.defenseDownTolerance)+increment(waist.defenseDownTolerance)+increment(leg.defenseDownTolerance)>=this.state.skillEquipments.defenseDownTolerance&&
                increment(head.paralysisTolerance)+increment(body.paralysisTolerance)+increment(arm.paralysisTolerance)+increment(waist.paralysisTolerance)+increment(leg.paralysisTolerance)>=this.state.skillEquipments.paralysisTolerance&&
                increment(head.waterTolerance)+increment(body.waterTolerance)+increment(arm.waterTolerance)+increment(waist.waterTolerance)+increment(leg.waterTolerance)>=this.state.skillEquipments.waterTolerance&&
                increment(head.earplug)+increment(body.earplug)+increment(arm.earplug)+increment(waist.earplug)+increment(leg.earplug)>=this.state.skillEquipments.earplug&&
                increment(head.dragonTolerance)+increment(body.dragonTolerance)+increment(arm.dragonTolerance)+increment(waist.dragonTolerance)+increment(leg.dragonTolerance)>=this.state.skillEquipments.dragonTolerance&&
                increment(head.lacerationTolerance)+increment(body.lacerationTolerance)+increment(arm.lacerationTolerance)+increment(waist.lacerationTolerance)+increment(leg.lacerationTolerance)>=this.state.skillEquipments.lacerationTolerance&&
                increment(head.heatVoid)+increment(body.heatVoid)+increment(arm.heatVoid)+increment(waist.heatVoid)+increment(leg.heatVoid)>=this.state.skillEquipments.heatVoid&&
                increment(head.miasmaTolerance)+increment(body.miasmaTolerance)+increment(arm.miasmaTolerance)+increment(waist.miasmaTolerance)+increment(leg.miasmaTolerance)>=this.state.skillEquipments.miasmaTolerance&&
                increment(head.windPressureVoid)+increment(body.windPressureVoid)+increment(arm.windPressureVoid)+increment(waist.windPressureVoid)+increment(leg.windPressureVoid)>=this.state.skillEquipments.windPressureVoid&&
                increment(head.gunshotBuildup)+increment(body.gunshotBuildup)+increment(arm.gunshotBuildup)+increment(waist.gunshotBuildup)+increment(leg.gunshotBuildup)>=this.state.skillEquipments.gunshotBuildup&&
                increment(head.cannonBallUp)+increment(body.cannonBallUp)+increment(arm.cannonBallUp)+increment(waist.cannonBallUp)+increment(leg.cannonBallUp)>=this.state.skillEquipments.cannonBallUp&&
                increment(head.slugBuildup)+increment(body.slugBuildup)+increment(arm.slugBuildup)+increment(waist.slugBuildup)+increment(leg.slugBuildup)>=this.state.skillEquipments.slugBuildup&&
                increment(head.ammoBuildup)+increment(body.ammoBuildup)+increment(arm.ammoBuildup)+increment(waist.ammoBuildup)+increment(leg.ammoBuildup)>=this.state.skillEquipments.ammoBuildup&&
                increment(head.pierceBuildup)+increment(body.pierceBuildup)+increment(arm.pierceBuildup)+increment(waist.pierceBuildup)+increment(leg.pierceBuildup)>=this.state.skillEquipments.pierceBuildup&&
                increment(head.itemBuildup)+increment(body.itemBuildup)+increment(arm.itemBuildup)+increment(waist.itemBuildup)+increment(leg.itemBuildup)>=this.state.skillEquipments.itemBuildup&&
                increment(head.fungiLove)+increment(body.fungiLove)+increment(arm.fungiLove)+increment(waist.fungiLove)+increment(leg.fungiLove)>=this.state.skillEquipments.fungiLove&&
                increment(head.widening)+increment(body.widening)+increment(arm.widening)+increment(waist.widening)+increment(leg.widening)>=this.state.skillEquipments.widening&&
                increment(head.manure)+increment(body.manure)+increment(arm.manure)+increment(waist.manure)+increment(leg.manure)>=this.state.skillEquipments.manure&&
                increment(head.preparation)+increment(body.preparation)+increment(arm.preparation)+increment(waist.preparation)+increment(leg.preparation)>=this.state.skillEquipments.preparation&&
                increment(head.flashBuildup)+increment(body.flashBuildup)+increment(arm.flashBuildup)+increment(waist.flashBuildup)+increment(leg.flashBuildup)>=this.state.skillEquipments.flashBuildup&&
                increment(head.whetstone)+increment(body.whetstone)+increment(arm.whetstone)+increment(waist.whetstone)+increment(leg.whetstone)>=this.state.skillEquipments.whetstone&&
                increment(head.grill)+increment(body.grill)+increment(arm.grill)+increment(waist.grill)+increment(leg.grill)>=this.state.skillEquipments.grill&&
                increment(head.eating)+increment(body.eating)+increment(arm.eating)+increment(waist.eating)+increment(leg.eating)>=this.state.skillEquipments.eating&&
                increment(head.gratification)+increment(body.gratification)+increment(arm.gratification)+increment(waist.gratification)+increment(leg.gratification)>=this.state.skillEquipments.gratification&&
                increment(head.transport)+increment(body.transport)+increment(arm.transport)+increment(waist.transport)+increment(leg.transport)>=this.state.skillEquipments.transport&&
                increment(head.insect)+increment(body.insect)+increment(arm.insect)+increment(waist.insect)+increment(leg.insect)>=this.state.skillEquipments.insect&&
                increment(head.gather)+increment(body.gather)+increment(arm.gather)+increment(waist.gather)+increment(leg.gather)>=this.state.skillEquipments.gather&&
                increment(head.flora)+increment(body.flora)+increment(arm.flora)+increment(waist.flora)+increment(leg.flora)>=this.state.skillEquipments.flora&&
                increment(head.exploraLucky)+increment(body.exploraLucky)+increment(arm.exploraLucky)+increment(waist.exploraLucky)+increment(leg.exploraLucky)>=this.state.skillEquipments.exploraLucky&&
                increment(head.geology)+increment(body.geology)+increment(arm.geology)+increment(waist.geology)+increment(leg.geology)>=this.state.skillEquipments.geology&&
                increment(head.stripping)+increment(body.stripping)+increment(arm.stripping)+increment(waist.stripping)+increment(leg.stripping)>=this.state.skillEquipments.stripping&&
                increment(head.honey)+increment(body.honey)+increment(arm.honey)+increment(waist.honey)+increment(leg.honey)>=this.state.skillEquipments.honey&&
                increment(head.detection)+increment(body.detection)+increment(arm.detection)+increment(waist.detection)+increment(leg.detection)>=this.state.skillEquipments.detection&&
                increment(head.capture)+increment(body.capture)+increment(arm.capture)+increment(waist.capture)+increment(leg.capture)>=this.state.skillEquipments.capture&&
                increment(head.lucky)+increment(body.lucky)+increment(arm.lucky)+increment(waist.lucky)+increment(leg.lucky)>=this.state.skillEquipments.lucky&&
                increment(head.lead)+increment(body.lead)+increment(arm.lead)+increment(waist.lead)+increment(leg.lead)>=this.state.skillEquipments.lead&&
                increment(head.threaten)+increment(body.threaten)+increment(arm.threaten)+increment(waist.threaten)+increment(leg.threaten)>=this.state.skillEquipments.threaten&&
                increment(head.guideReactionUp)+increment(body.guideReactionUp)+increment(arm.guideReactionUp)+increment(waist.guideReactionUp)+increment(leg.guideReactionUp)>=this.state.skillEquipments.guideReactionUp&&
                increment(head.latentia)+increment(body.latentia)+increment(arm.latentia)+increment(waist.latentia)+increment(leg.latentia)>=this.state.skillEquipments.latentia&&
                increment(head.tracing)+increment(body.tracing)+increment(arm.tracing)+increment(waist.tracing)+increment(leg.tracing)>=this.state.skillEquipments.tracing&&
                increment(head.scholar)+increment(body.scholar)+increment(arm.scholar)+increment(waist.scholar)+increment(leg.scholar)>=this.state.skillEquipments.scholar&&
                increment(head.squat)+increment(body.squat)+increment(arm.squat)+increment(waist.squat)+increment(leg.squat)>=this.state.skillEquipments.squat&&
                increment(head.waterPlaceAdjustment)+increment(body.waterPlaceAdjustment)+increment(arm.waterPlaceAdjustment)+increment(waist.waterPlaceAdjustment)+increment(leg.waterPlaceAdjustment)>=this.state.skillEquipments.waterPlaceAdjustment&&
                increment(head.loadingUp)+increment(body.loadingUp)+increment(arm.loadingUp)+increment(waist.loadingUp)+increment(leg.loadingUp)>=this.state.skillEquipments.loadingUp&&
                increment(head.fishing)+increment(body.fishing)+increment(arm.fishing)+increment(waist.fishing)+increment(leg.fishing)>=this.state.skillEquipments.fishing
                ) {
                  myItems.push('頭'+head.name+'体'+body.name+'腕'+arm.name+'腰'+waist.name+'足'+leg.name);
                }
              }
            }
          }
        }
      }
      // setStateのタイミングは非同期の為注意　forの中身でやると事故った　ちゃんとした方法があるとは思う
      this.setState({items: myItems});
      console.log('終わり');
    }
  }

  function increment(x) {
    if (isNaN(x)) x = 0;
    return x;
  };

  const CheckList = (props) => {
    var list = [];
    for (var i in props.skills) {
      var skillContent = [];
      skillContent.push(props.skills[i].name);// html要素使わない場合{}で囲わない
      for(var counter = 0; counter <= props.skills[i].level; counter++){
        skillContent.push(counter);
        skillContent.push(<input type="radio" key={counter} name={props.skills[i].name} defaultChecked={counter==0} value={counter} onChange={props.handleChange} />);
      };// 親からハンドルを渡せば子から叩ける
      list.push(<div>{skillContent}</div>);
    };

    return (
      <div>
        {list}
      </div>
    );
  }



  const EquipmentList = (props) => {
    console.log("変更");
    var list = [];
    console.log(props);
    for (var i in props.equipment) {
      list.push(<li>{props.equipment[i]}</li>);
    }
    return (
      <div>
        <ul>
        {list}
        </ul>
      </div>
    );
  }

  ReactDOM.render( // コンポーネント作成して読み込ませる
    <TodoApp />,
    document.getElementById('content')
  );
