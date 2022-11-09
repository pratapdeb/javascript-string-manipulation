const usage = "Usage: crlf-convert [CR|LF|CRLF]";

const help = String.raw`${{usage}}

        Converts text between newline (\\n), carriage return (\\r), and combined
         (\\r\\n) line endings.
         Options:
         [CR|LF|CRLF]: Desired line ending
         CR is a carriage return character (rar
         LF is a line feed character (common on Unix and macO
         CRLF is a combined ending (common on Window
         Example:
         cat in.txt | crlf-convert LF > out.txt`

module.exports = {
  help,
  usage
};
