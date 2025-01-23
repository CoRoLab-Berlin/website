---
title: BROMMI:TAK
order: 5
image: images/hardware/brommiTak.jpg
description: BROMMI:TAK is a bioinspired redundant elephant's trunk completely driven by fluidic muscles.
---

BROMMI:TAK is a bioinspired redundant elephant's trunk completely driven by fluidic muscles. The robot consist of 8 segments driven by 27 fluidic muscle actuators, controlled by 50 valves and observed by 35 pressure and 19 angle sensors; 19 DOF's.

## Buildup:

- Head segment
  - **Turner joint**:  
    - Driven by 2 fluidic muscles DMSP-40 (each 6kN max)
    - Controlled by 2 proportional valves MPYE
    - Observed by 2 pressure sensors and 1 angle sensor
  - **Lifter joint**:  
    - Driven by 4 (2 parallel) fluidic muscles DMSP-40 (each 6kN max)
    - Controlled by 2 proportional valves MPYE
    - Observed by 2 pressure sensors and 1 angle sensor

- 4 Upper trunk segments
  - Each driven by 3 fluidic muscles DMSP-20 (each 1.5kN max)
  - Each controlled by 6 proportional valves PVQ
  - Observed by 3+1 (segment inlet) pressure sensors and 2 angle sensors

- 3 Lower trunk segments
  - Each driven by 3 fluidic muscles DMSP-10 (each 0.63kN max)
  - Each controlled by 6 switching valves MH1
  - Observed by 3+1 (segment inlet) pressure sensors and 2 angle sensors

- Hand segment
  - Driven by 1 pneumatic DSM and 1 pneumatic Fin-Ray gripper DHDG
  - Controlled by 4 switching valves MH1
  - Observed by 2+1 (segment inlet) pressure sensors and 1 angle sensor

## Performance parameters:
- **Target speed**:  
  - Normal: 250 mm/sec  
  - Maximal: 1 m/sec (mechanically limited by tube diameter)
- **Accuracy**:  
  - Position: ±15 mm  
  - Repeat: ±5 mm
- **Payload**:  
  - Handling: 500g  
  - Maximal: 3kg
- **Power**:  
  - Stand-by: 10W  
  - Operation: 50W (both plus compressed air)
- **Trunk weight**: 18kg
- **Material cost**: <10,000 Euro