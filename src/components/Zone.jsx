/* eslint-disable react/prop-types */
export default function Zone(props) {

  const nums = [
    "",
    "Ein",
    "Zwei",
    "Drei",
    "Vier",
    "Fünf",
    "Sechs",
    "Sieben",
    "Acht",
    "Neun",
    "Zehn",
    "Elf",
    "Zwölf",
  ];

  function uppercase(string) {
    var f_0 = string.toLowerCase();
    return f_0[0].toUpperCase() + f_0.slice(1);
  }
  function containsOnlyDigits(str) {
    return /^\d+$/.test(str);
  }

  function convert_to_number(german) {
    var result = null;
    var error_msg = "Invalid";
    var f_0 = "";
    var f_1 = "";
    var f_2 = "";
    var fx = "";
    var fy = "";

    // 2000000000000 - 999999999999999
    if (german.replaceAll(" ", "").includes("Billionen")) {
      f_0 = german.replaceAll(" ", "").split("Billionen");
      f_1 = f_0[1].trim();
      f_2 = f_0[0].trim();
      if (f_1 === "") {
        fx = convert_to_number(f_2);
        if (fx !== error_msg) {
          result = fx * 10 ** 12;
        } else {
          return error_msg;
        }
      } else {
        fx = convert_to_number(f_2);
        fy = convert_to_number(f_1);
        if (fx !== error_msg && fy !== error_msg) {
          result = fx * 10 ** 12 + fy;
        } else {
          return error_msg;
        }
      }
    }

    // 1000000000000 - 1999999999999
    else if (german.replaceAll(" ", "").includes("Billion")) {
      f_0 = german.replaceAll(" ", "").split("Billion");

      if (f_0[0].trim() === "Eine") {
        f_1 = f_0[1].trim();
        if (f_1 === "") {
          result = 10 ** 12;
        } else {
          fx = convert_to_number(f_1);
          if (fx !== error_msg) {
            result = 10 ** 12 + fx;
          } else {
            return error_msg;
          }
        }
      } else {
        return error_msg;
      }
    }
    // 2000000000 - 999999999999
    else if (german.replaceAll(" ", "").includes("Milliarden")) {
      f_0 = german.replaceAll(" ", "").split("Milliarden");
      f_1 = f_0[1].trim();
      f_2 = f_0[0].trim();
      if (f_1 === "") {
        fx = convert_to_number(f_2);
        if (fx !== error_msg) {
          result = fx * 10 ** 9;
        } else {
          return error_msg;
        }
      } else {
        fx = convert_to_number(f_2);
        fy = convert_to_number(f_1);
        if (fx !== error_msg && fy !== error_msg) {
          result = fx * 10 ** 9 + fy;
        } else {
          return error_msg;
        }
      }
    }

    // 1000000000 - 1999999999
    else if (german.replaceAll(" ", "").includes("Milliarde")) {
      f_0 = german.replaceAll(" ", "").split("Milliarde");

      if (f_0[0].trim() === "Eine") {
        f_1 = f_0[1].trim();
        if (f_1 === "") {
          result = 10 ** 9;
        } else {
          fx = convert_to_number(f_1);
          if (fx !== error_msg) {
            result = 10 ** 9 + fx;
          } else {
            return error_msg;
          }
        }
      } else {
        return error_msg;
      }
    }

    // 2000000 - 999999999
    else if (german.replaceAll(" ", "").includes("Millionen")) {
      f_0 = german.replaceAll(" ", "").split("Millionen");
      f_1 = f_0[1];
      f_2 = f_0[0];
      if (f_1 === "") {
        fx = convert_to_number(f_2);
        if (fx !== error_msg) {
          result = fx * 10 ** 6;
        } else {
          return error_msg;
        }
      } else {
        fx = convert_to_number(f_2);
        fy = convert_to_number(uppercase(f_1));
        if (fx !== error_msg && fy !== error_msg) {
          result = fx * 10 ** 6 + fy;
        } else {
          return error_msg;
        }
      }
    }

    // 1000000 - 1999999
    else if (german.replaceAll(" ", "").includes("Million")) {
      f_0 = german.replaceAll(" ", "").split("Million");

      if (f_0[0] === "Eine") {
        f_1 = f_0[1];
        if (f_1 === "") {
          result = 10 ** 6;
        } else {
          fx = convert_to_number(uppercase(f_1));
          if (fx !== error_msg) {
            result = 10 ** 6 + fx;
          } else {
            return error_msg;
          }
        }
      } else {
        return error_msg;
      }
    }

    // 1000 - 999999
    else if (german.includes("tausend")) {
      f_0 = german.split("tausend");
      f_1 = f_0[1];
      f_2 = f_0[0];
      if (f_2 !== "") {
        if (f_1 === "") {
          fx = convert_to_number(f_2);
          if (fx !== error_msg) {
            result = fx * 1000;
          } else {
            return error_msg;
          }
        } else {
          fx = convert_to_number(f_2);
          fy = convert_to_number(uppercase(f_1));
          if (fx !== error_msg && fy !== error_msg) {
            result = fx * 1000 + fy;
          } else {
            return error_msg;
          }
        }
      } else {
        return error_msg;
      }
    }

    // 100 - 999
    else if (german.includes("hundert")) {
      f_0 = german.split("hundert");
      f_1 = f_0[1];
      f_2 = f_0[0];
      if (f_2 !== "") {
        if (f_1 === "") {
          fx = convert_to_number(f_2);
          if (fx !== error_msg) {
            result = fx * 100;
          } else {
            return error_msg;
          }
        } else {
          fx = convert_to_number(f_2);
          fy = convert_to_number(uppercase(f_1));
          if (fx !== error_msg && fy !== error_msg) {
            result = fx * 100 + fy;
          } else {
            return error_msg;
          }
        }
      } else {
        return error_msg;
      }
    }

    // 20 - 99
    else if (german.includes("zig") || german.includes("ßig")) {
      if (german.length === 7) {
        f_0 = german.slice(0, 4);
        if (f_0 === "Zwan") {
          result = 20;
        } else if (f_0 === "Sech") {
          result = 60;
        } else if (f_0 === "Sieb") {
          result = 70;
        } else {
          fx = convert_to_number(f_0);
          if (fx !== error_msg) {
            result = fx * 10;
          } else {
            return error_msg;
          }
        }
      } else {
        if (german.includes("und")) {
          f_0 = german.split("und");
          f_1 = uppercase(f_0[1]);
          f_2 = f_0[0];
          if (f_1 !== "" && f_2 !== "") {
            fx = convert_to_number(f_2);
            fy = convert_to_number(f_1);
            if (fx !== error_msg && fy !== error_msg) {
              result = fx + fy;
            } else {
              return error_msg;
            }
          }
        } else {
          return error_msg;
        }
      }
    }

    // 13 - 19
    else if (german.includes("zehn")) {
      f_0 = german.slice(0, 4);
      if (f_0 === "Sech") {
        result = 16;
      } else if (f_0 === "Sieb") {
        result = 17;
      } else {
        fx = convert_to_number(f_0);
        if (fx !== error_msg) {
          result = fx + 10;
        } else {
          return error_msg;
        }
      }
    } else if (german === "") {
      result = "";
    } else if (german === "Null") {
      result = 0;
    }
    // 1
    else if (german === "Eins") {
      result = 1;
    }
    // 2 - 12
    else if (nums.includes(german)) {
      result = nums.indexOf(german);
    }

    if (result != null) {
      return result;
    } else {
      return error_msg;
    }
  }

  function convert_to_german(number) {
    var f_1 = '';
    var f_2 = '';
    var result = "";

    if (containsOnlyDigits(number)) {
      number = parseInt(number)
      // 1 - 12
      if (number === 0) {
        result = "Null";
      } else if (number === 1) {
        result = "Eins";
      } else if (number > 1 && number <= 12) {
        console.log(typeof (number));
        result = nums[number];
      }
      // 13 - 19
      else if (number >= 13 && number <= 19) {
        f_1 = nums[parseInt(String(number)[1])].slice(0, 4);
        result = `${f_1}-zehn`;
      }
      // 20 - 99
      else if (number >= 20 && number <= 99) {
        var ending = "";
        f_1 = parseInt(String(number)[1]);
        f_2 = parseInt(String(number)[0]);

        if (f_2 === 2) {
          ending = "zwanzig";
        } else if (f_2 === 3) {
          ending = "dreißig";
        } else {
          ending = `${nums[f_2].slice(0, 4)}zig`;
        }
        if (f_1 === 0) {
          result = uppercase(ending);
        } else {
          result = uppercase(`${nums[f_1]}-und-${ending}`);
        }
      }
      // 100 - 999
      else if (number >= 100 && number <= 999) {
        f_1 = parseInt(String(number).slice(1));
        f_2 = parseInt(String(number).slice(0, 1));
        if (f_1 === 0) {
          result = uppercase(`${nums[f_2]}-hundert`);
        } else {
          result = uppercase(`${nums[f_2]}-hundert-${convert_to_german(f_1)}`);
        }
      }

      // 1000 - 999999
      else if (number >= 1000 && number <= 999999) {
        f_1 = parseInt(String(number).slice(-3));
        f_2 = parseInt(String(number).slice(0, -3));

        if (f_1 === 0) {
          if (f_2 === 1) {
            result = "Ein-tausend";
          } else {
            result = uppercase(`${convert_to_german(f_2)}-tausend`);
          }
        } else {
          if (f_2 === 1) {
            result = uppercase(`Ein-tausend-${convert_to_german(f_1)}`);
          } else {
            result = uppercase(
              `${convert_to_german(f_2)}-tausend-${convert_to_german(f_1)}`
            );
          }
        }
      }
      // 1000000 - 999999999
      else if (number >= 1000000 && number <= 999999999) {
        f_1 = parseInt(String(number).slice(-6));
        f_2 = parseInt(String(number).slice(0, -6));

        if (f_1 === 0) {
          if (f_2 === 1) {
            result = "Eine Million";
          } else {
            result = uppercase(`${convert_to_german(f_2)}`) + " Millionen";
          }
        } else {
          if (f_2 === 1) {
            result = "Eine Million " + uppercase(`${convert_to_german(f_1)}`);
          } else {
            result =
              `${convert_to_german(f_2)} Millionen ` +
              uppercase(`${convert_to_german(f_1)}`);
          }
        }
      }
      // 10**9 - 999999999999
      else if (number >= 10 ** 9 && number <= 999999999999) {
        f_1 = parseInt(String(number).slice(-9));
        f_2 = parseInt(String(number).slice(0, -9));

        if (f_1 === 0) {
          if (f_2 === 1) {
            result = "Eine Milliarde";
          } else {
            result = `${convert_to_german(f_2)}` + " Milliarden";
          }
        } else {
          if (f_2 === 1) {
            result = "Eine Milliarde " + `${convert_to_german(f_1)}`;
          } else {
            result =
              `${convert_to_german(f_2)} Milliarden ` +
              `${convert_to_german(f_1)}`;
          }
        }
      }
      // 10**12 - 999999999999999
      else if (number >= 10 ** 12 && number <= 999999999999999) {
        f_1 = parseInt(String(number).slice(-12));
        f_2 = parseInt(String(number).slice(0, -12));

        if (f_1 === 0) {
          if (f_2 === 1) {
            result = "Eine Billion";
          } else {
            result = `${convert_to_german(f_2)}` + " Billionen";
          }
        } else {
          if (f_2 === 1) {
            result = "Eine Billion " + `${convert_to_german(f_1)}`;
          } else {
            result =
              `${convert_to_german(f_2)} Billionen ` +
              `${convert_to_german(f_1)}`;
          }
        }
      }

      return result;
    }
    else if (number === '') {
      return '';
    }
    else {
      return 'Invalid';
    }


  }


  function translate(data) {

    if (props.language === 'English') {
      props.getData_1(data)
      props.getData_2(convert_to_german(data))
    }
    else if (props.language === 'German') {
      props.getData_1(data)
      props.getData_2(convert_to_number(data.replaceAll('-', '')))
    }


  }

  return (
    <div className="w-screen h-[60%] md:h-[50rem] space-y-4 md:space-y-0 flex justify-center items-center  md:justify-around flex-col md:flex-row">

      <textarea spellCheck='false' value={props.data_1} onChange={event => translate(event.target.value)} className="h-[60%] w-[90%] md:h-[90%] md:w-[45%] bg-[#CDC2A5] rounded-lg p-5 resize-none outline-none"></textarea>
      <div className="h-[60%] w-[90%] md:h-[90%] md:w-[45%] bg-[#E1D7C6] rounded-lg p-5 break-words">{props.data_2}</div>

    </div>
  )
}