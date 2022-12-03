const mockFn = jest.fn();
const MissionUtils = require("@woowacourse/mission-utils");

describe("jest.fn 공부하기", () => {
  // mockReturnValue의 초기 값이 undefined이라는 것을 확인할 수 있다
  test("mockReturnValue", () => {
    const returnValue = mockFn();
    expect(returnValue).toEqual(undefined);
  });

  // mockReturnValue 반환값 설정하기
  test("mockReturnValue 반환 값 설정하기", () => {
    mockFn.mockReturnValue("I am a mock!");
    const returnValue = mockFn();
    expect(returnValue).toEqual("I am a mock!");
  });

  // mockReturnValueOnce로 반환값 설정하기
  test("mockReturnValueOnce 반환 값 설정하기", () => {
    mockFn.mockReturnValueOnce("I am a mock!");
    const returnValue = mockFn();
    expect(returnValue).toEqual("I am a mock!");
  });
});

describe.only("mockReturnValue와 mockReturnValueOnce 차이점 확인하기", () => {
  test("mockReturnValue", () => {
    mockFn.mockReturnValue("I am a mock!");
    expect(mockFn()).toEqual("I am a mock!");
    expect(mockFn()).toEqual("I am a mock!");
    expect(mockFn()).toEqual("I am a mock!");
  });

  // 오류가 나는 것을 확인할 수 있다
  //   test("mockReturnValueOnce", () => {
  //     mockFn.mockReturnValueOnce("테스트 하기");
  //     expect(mockFn()).toEqual("테스트 하기");
  //     expect(mockFn()).toEqual("테스트 하기");
  //     expect(mockFn()).toEqual("테스트 하기");
  //   });

  test("mockReturnValueOnce", () => {
    mockFn.mockReturnValueOnce("테스트 하기");
    expect(mockFn()).toEqual("테스트 하기");
    expect(mockFn()).toEqual("I am a mock!");
    expect(mockFn()).toEqual("I am a mock!");
  });
});
