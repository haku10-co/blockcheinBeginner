import { Validator } from "../types/validator.ts";

export function pickWinner(): Validator {
  // 山田さん
  const v1: Validator = {
    addr: "YamadaWallet",
    signature: "私は責任を持って取引をチェックします",
    token: 1,
  };
  // 田中さん
  const v2: Validator = {
    addr: "TanakaWallet",
    signature: "私は責任を持って取引をチェックします",
    token: 2,
  };
  // 斉藤さん
  const v3: Validator = {
    addr: "SaitoWallet",
    signature: "私は責任を持って取引をチェックします",
    token: 3,
  };
  // 渡辺さん
  const v4: Validator = {
    addr: "WatanabeWallet",
    signature: "私は責任を持って取引をチェックします",
    token: 4,
  };

  // バリデーターのリスト
  const validators = [v1, v2, v3, v4];

  // 各バリデーターの選ばれる確率を計算
  const totalTokenPower = validators.reduce((total, validator) => total + Math.pow(validator.token, (30 - validators.length / 100)), 0);
  const probabilities = validators.map(validator => Math.pow(validator.token, (30 - validators.length / 100)) / totalTokenPower);

  // 乱数を生成
  const random = Math.random();
  
  // 生成された乱数に基づいてバリデーターを選ぶ
    // 省略...
  
    let cumulativeProbability = 0.0;
    for (let i = 0; i < validators.length; i++) {
      cumulativeProbability += probabilities[i];
      if (random <= cumulativeProbability) {
        console.log(`${validators[i].addr} がバリデーターに選ばれました`);
        return validators[i];
      }
    }
  
    throw new Error("No validator could be selected. This should never happen.");
  }
  

  // 全てのバリデーターがチェックされた後
