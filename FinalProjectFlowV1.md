```mermaid
    flowchart TB
    Start([Wait for time in seconds to be inputted])
    St1(wait for submit to be pressed)
    Start --> St1 --> St2 --> St3 --> Dec1
    St2(Make a loop with # Sec iterations)
    St3(Make i variable equal to # sec)
    Dec1{i == 0}
    D1y(Counter finished)
    D1n(print i)
    D1n2(i--)
    D1n3(delay 1 sec)
    Dec1 -->|yes|D1y --> D1y2 --> End
    Dec1 -->|no| D1n -->D1n2 --> D1n3 --> Dec1
    Dec1
    D1y2(play buzzer sound)
     End([turn off buzzer and wait for new submission])