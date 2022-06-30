import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      now_user: {},
      user: { s: { email_id: 's', nickname: 'hello', pwd: 's' } },
      load_data: '',
      save_data: [{
        problem_name: '리본 수학 (test-1)',
        complete_time: '2021-5-04',
        nickname: '테스트1',
        list: [
          {
            title: '삼각형의 3각의 합은 몇도인가?',
            val: 1,
            answer: 2,
            choice: [
              {
                txt: '220도'
              },
              {
                txt: '540도'
              },
              {
                txt: '180도'
              },
              {
                txt: '360도'
              }
            ]
          },
          {
            title: '1 부터 10 까지의 합은?',
            val: 2,
            answer: 0,
            choice: [
              {
                txt: '55'
              },
              {
                txt: '23'
              },
              {
                txt: '38'
              }
            ]
          },
          {
            title: '3 + 3 * 3 / 2',
            val: 3,
            answer: 2,
            choice: [
              {
                txt: '9'
              },
              {
                txt: '6'
              },
              {
                txt: '7.5'
              }
            ]
          },
          {
            title: '10 과 15의 최소공배수는?',
            val: 4,
            answer: 2,
            choice: [
              {
                txt: '5'
              },
              {
                txt: '10'
              },
              {
                txt: '30'
              },
              {
                txt: '150'
              }
            ]
          },
          {
            title: '테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다',
            val: 5,
            answer: 1,
            choice: [
              {
                txt: '가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하'
              },
              {
                txt: '1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890'
              },
              {
                txt: 'abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz'
              }
            ]
          },
          {
            title: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
            val: 6,
            answer: 2,
            choice: [
              {
                txt: '아니오'
              },
              {
                txt: '예'
              },
              {
                txt: '이게 정답'
              }
            ]
          }
        ]
      },
      {
        problem_name: '다본 수학 (test-1)',
        complete_time: '2021-5-03',
        nickname: 'ㅇㅇ',
        list: [
          {
            title: '삼각형의 3각의 합은 몇도인가?',
            val: 1,
            answer: 2,
            choice: [
              {
                txt: '220도'
              },
              {
                txt: '540도'
              },
              {
                txt: '180도'
              },
              {
                txt: '360도'
              }
            ]
          },
          {
            title: '1 부터 10 까지의 합은?',
            val: 2,
            answer: 0,
            choice: [
              {
                txt: '55'
              },
              {
                txt: '23'
              },
              {
                txt: '38'
              }
            ]
          },
          {
            title: '3 + 3 * 3 / 2',
            val: 3,
            answer: 2,
            choice: [
              {
                txt: '9'
              },
              {
                txt: '6'
              },
              {
                txt: '7.5'
              }
            ]
          },
          {
            title: '10 과 15의 최소공배수는?',
            val: 4,
            answer: 2,
            choice: [
              {
                txt: '5'
              },
              {
                txt: '10'
              },
              {
                txt: '30'
              },
              {
                txt: '150'
              }
            ]
          },
          {
            title: '테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다',
            val: 5,
            answer: 1,
            choice: [
              {
                txt: '가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하'
              },
              {
                txt: '1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890'
              },
              {
                txt: 'abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz'
              }
            ]
          },
          {
            title: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
            val: 6,
            answer: 2,
            choice: [
              {
                txt: '아니오'
              },
              {
                txt: '예'
              },
              {
                txt: '이게 정답'
              }
            ]
          }
        ]
      },
      {
        problem_name: '니본 수학 (test-1)',
        complete_time: '2021-3-24',
        nickname: 'hello',
        list: [
          {
            title: '삼각형의 3각의 합은 몇도인가?',
            val: 1,
            answer: 2,
            choice: [
              {
                txt: '220도'
              },
              {
                txt: '540도'
              },
              {
                txt: '180도'
              },
              {
                txt: '360도'
              }
            ]
          },
          {
            title: '1 부터 10 까지의 합은?',
            val: 2,
            answer: 0,
            choice: [
              {
                txt: '55'
              },
              {
                txt: '23'
              },
              {
                txt: '38'
              }
            ]
          },
          {
            title: '3 + 3 * 3 / 2',
            val: 3,
            answer: 2,
            choice: [
              {
                txt: '9'
              },
              {
                txt: '6'
              },
              {
                txt: '7.5'
              }
            ]
          },
          {
            title: '10 과 15의 최소공배수는?',
            val: 4,
            answer: 2,
            choice: [
              {
                txt: '5'
              },
              {
                txt: '10'
              },
              {
                txt: '30'
              },
              {
                txt: '150'
              }
            ]
          },
          {
            title: '테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다',
            val: 5,
            answer: 1,
            choice: [
              {
                txt: '가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하'
              },
              {
                txt: '1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890'
              },
              {
                txt: 'abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz'
              }
            ]
          },
          {
            title: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
            val: 6,
            answer: 2,
            choice: [
              {
                txt: '아니오'
              },
              {
                txt: '예'
              },
              {
                txt: '이게 정답'
              }
            ]
          }
        ]
      },
      {
        problem_name: '리본 수학 (test-1)',
        complete_time: '2021-7-02',
        nickname: '테스트1',
        list: [
          {
            title: '삼각형의 3각의 합은 몇도인가?',
            val: 1,
            answer: 2,
            choice: [
              {
                txt: '220도'
              },
              {
                txt: '540도'
              },
              {
                txt: '180도'
              },
              {
                txt: '360도'
              }
            ]
          },
          {
            title: '1 부터 10 까지의 합은?',
            val: 2,
            answer: 0,
            choice: [
              {
                txt: '55'
              },
              {
                txt: '23'
              },
              {
                txt: '38'
              }
            ]
          },
          {
            title: '3 + 3 * 3 / 2',
            val: 3,
            answer: 2,
            choice: [
              {
                txt: '9'
              },
              {
                txt: '6'
              },
              {
                txt: '7.5'
              }
            ]
          },
          {
            title: '10 과 15의 최소공배수는?',
            val: 4,
            answer: 2,
            choice: [
              {
                txt: '5'
              },
              {
                txt: '10'
              },
              {
                txt: '30'
              },
              {
                txt: '150'
              }
            ]
          },
          {
            title: '테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다',
            val: 5,
            answer: 1,
            choice: [
              {
                txt: '가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하'
              },
              {
                txt: '1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890'
              },
              {
                txt: 'abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz'
              }
            ]
          },
          {
            title: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
            val: 6,
            answer: 2,
            choice: [
              {
                txt: '아니오'
              },
              {
                txt: '예'
              },
              {
                txt: '이게 정답'
              }
            ]
          }
        ]
      },
      {
        problem_name: '(test-1)',
        complete_time: '2021-5-04',
        nickname: '!테스트1',
        list: [
          {
            title: '삼각형의 3각의 합은 몇도인가?',
            val: 1,
            answer: 2,
            choice: [
              {
                txt: '220도'
              },
              {
                txt: '540도'
              },
              {
                txt: '180도'
              },
              {
                txt: '360도'
              }
            ]
          },
          {
            title: '1 부터 10 까지의 합은?',
            val: 2,
            answer: 0,
            choice: [
              {
                txt: '55'
              },
              {
                txt: '23'
              },
              {
                txt: '38'
              }
            ]
          },
          {
            title: '3 + 3 * 3 / 2',
            val: 3,
            answer: 2,
            choice: [
              {
                txt: '9'
              },
              {
                txt: '6'
              },
              {
                txt: '7.5'
              }
            ]
          },
          {
            title: '10 과 15의 최소공배수는?',
            val: 4,
            answer: 2,
            choice: [
              {
                txt: '5'
              },
              {
                txt: '10'
              },
              {
                txt: '30'
              },
              {
                txt: '150'
              }
            ]
          },
          {
            title: '테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다',
            val: 5,
            answer: 1,
            choice: [
              {
                txt: '가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하'
              },
              {
                txt: '1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890'
              },
              {
                txt: 'abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz'
              }
            ]
          },
          {
            title: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
            val: 6,
            answer: 2,
            choice: [
              {
                txt: '아니오'
              },
              {
                txt: '예'
              },
              {
                txt: '이게 정답'
              }
            ]
          }
        ]
      },
      {
        problem_name: '비본 수학 (test-1)',
        complete_time: '2022-5-04',
        nickname: '테스트7',
        list: [
          {
            title: '삼각형의 3각의 합은 몇도인가?',
            val: 1,
            answer: 2,
            choice: [
              {
                txt: '220도'
              },
              {
                txt: '540도'
              },
              {
                txt: '180도'
              },
              {
                txt: '360도'
              }
            ]
          },
          {
            title: '1 부터 10 까지의 합은?',
            val: 2,
            answer: 0,
            choice: [
              {
                txt: '55'
              },
              {
                txt: '23'
              },
              {
                txt: '38'
              }
            ]
          },
          {
            title: '3 + 3 * 3 / 2',
            val: 3,
            answer: 2,
            choice: [
              {
                txt: '9'
              },
              {
                txt: '6'
              },
              {
                txt: '7.5'
              }
            ]
          },
          {
            title: '10 과 15의 최소공배수는?',
            val: 4,
            answer: 2,
            choice: [
              {
                txt: '5'
              },
              {
                txt: '10'
              },
              {
                txt: '30'
              },
              {
                txt: '150'
              }
            ]
          },
          {
            title: '테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다',
            val: 5,
            answer: 1,
            choice: [
              {
                txt: '가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하'
              },
              {
                txt: '1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890'
              },
              {
                txt: 'abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz'
              }
            ]
          },
          {
            title: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
            val: 6,
            answer: 2,
            choice: [
              {
                txt: '아니오'
              },
              {
                txt: '예'
              },
              {
                txt: '이게 정답'
              }
            ]
          }
        ]
      },
      {
        problem_name: '미본 수학 (test-1)',
        complete_time: '2010-6-20',
        nickname: 'A테스트1',
        list: [
          {
            title: '삼각형의 3각의 합은 몇도인가?',
            val: 1,
            answer: 2,
            choice: [
              {
                txt: '220도'
              },
              {
                txt: '540도'
              },
              {
                txt: '180도'
              },
              {
                txt: '360도'
              }
            ]
          },
          {
            title: '1 부터 10 까지의 합은?',
            val: 2,
            answer: 0,
            choice: [
              {
                txt: '55'
              },
              {
                txt: '23'
              },
              {
                txt: '38'
              }
            ]
          },
          {
            title: '3 + 3 * 3 / 2',
            val: 3,
            answer: 2,
            choice: [
              {
                txt: '9'
              },
              {
                txt: '6'
              },
              {
                txt: '7.5'
              }
            ]
          },
          {
            title: '10 과 15의 최소공배수는?',
            val: 4,
            answer: 2,
            choice: [
              {
                txt: '5'
              },
              {
                txt: '10'
              },
              {
                txt: '30'
              },
              {
                txt: '150'
              }
            ]
          },
          {
            title: '테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다',
            val: 5,
            answer: 1,
            choice: [
              {
                txt: '가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하'
              },
              {
                txt: '1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890'
              },
              {
                txt: 'abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz'
              }
            ]
          },
          {
            title: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
            val: 6,
            answer: 2,
            choice: [
              {
                txt: '아니오'
              },
              {
                txt: '예'
              },
              {
                txt: '이게 정답'
              }
            ]
          }
        ]
      },
      {
        problem_name: '기본 수학 (test-1)',
        complete_time: '2012-10-01',
        nickname: '테스트12',
        list: [
          {
            title: '삼각형의 3각의 합은 몇도인가?',
            val: 1,
            answer: 2,
            choice: [
              {
                txt: '220도'
              },
              {
                txt: '540도'
              },
              {
                txt: '180도'
              },
              {
                txt: '360도'
              }
            ]
          },
          {
            title: '1 부터 10 까지의 합은?',
            val: 2,
            answer: 0,
            choice: [
              {
                txt: '55'
              },
              {
                txt: '23'
              },
              {
                txt: '38'
              }
            ]
          },
          {
            title: '3 + 3 * 3 / 2',
            val: 3,
            answer: 2,
            choice: [
              {
                txt: '9'
              },
              {
                txt: '6'
              },
              {
                txt: '7.5'
              }
            ]
          },
          {
            title: '10 과 15의 최소공배수는?',
            val: 4,
            answer: 2,
            choice: [
              {
                txt: '5'
              },
              {
                txt: '10'
              },
              {
                txt: '30'
              },
              {
                txt: '150'
              }
            ]
          },
          {
            title: '테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다',
            val: 5,
            answer: 1,
            choice: [
              {
                txt: '가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하'
              },
              {
                txt: '1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890'
              },
              {
                txt: 'abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz'
              }
            ]
          },
          {
            title: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
            val: 6,
            answer: 2,
            choice: [
              {
                txt: '아니오'
              },
              {
                txt: '예'
              },
              {
                txt: '이게 정답'
              }
            ]
          }
        ]
      },
      {
        problem_name: '기본 수학 (test-2)',
        complete_time: '2022-6-24',
        nickname: '3테스트',
        list: [
          {
            title: '삼각형의 3각의 합은 몇도인가?',
            val: 1,
            answer: 2,
            choice: [
              {
                txt: '220도'
              },
              {
                txt: '540도'
              },
              {
                txt: '180도'
              },
              {
                txt: '360도'
              }
            ]
          },
          {
            title: '1 부터 10 까지의 합은?',
            val: 2,
            answer: 0,
            choice: [
              {
                txt: '55'
              },
              {
                txt: '23'
              },
              {
                txt: '38'
              }
            ]
          },
          {
            title: '3 + 3 * 3 / 2',
            val: 3,
            answer: 2,
            choice: [
              {
                txt: '9'
              },
              {
                txt: '6'
              },
              {
                txt: '7.5'
              }
            ]
          },
          {
            title: '10 과 15의 최소공배수는?',
            val: 4,
            answer: 2,
            choice: [
              {
                txt: '5'
              },
              {
                txt: '10'
              },
              {
                txt: '30'
              },
              {
                txt: '150'
              }
            ]
          },
          {
            title: '테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다',
            val: 5,
            answer: 1,
            choice: [
              {
                txt: '가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하'
              },
              {
                txt: '1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890'
              },
              {
                txt: 'abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz'
              }
            ]
          },
          {
            title: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
            val: 6,
            answer: 2,
            choice: [
              {
                txt: '아니오'
              },
              {
                txt: '예'
              },
              {
                txt: '이게 정답'
              }
            ]
          }
        ]
      }
      ],
      save_id: ''
    }
  },
  getters: {
  },
  mutations: {
    regist_user (state, data) {
      state.user[data.email_id] = data
    },
    save_data (state, data) {
      state.load_data = data
      state.save_data.unshift(data)
    },
    loading_data (state, data) {
      state.load_data = data
    },
    now_user (state, data) {
      state.now_user = data
    },
    log_out (state) {
      state.now_user = {}
    },
    save_id (state, data) {
      state.save_id = data
      console.log(state.save_id)
    },
    select_option (state, data) {
      if (data === 'complete_time') {
        state.save_data.sort((a, b) => b.complete_time.localeCompare(a.complete_time))
      } else {
        state.save_data.sort((a, b) => a[data].localeCompare(b[data]))
      }
    },
    check_data () {
      if (this.$store.state.now_user === {}) {
        alert('로그인 후 이용해 주세요')
        this.$router.push({ path: '/' })
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
