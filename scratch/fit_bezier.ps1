# Coordinates traced from the arrow center line
$points = @(
    @{x=200; y=678},
    @{x=280; y=611},
    @{x=400; y=551},
    @{x=600; y=481},
    @{x=800; y=403},
    @{x=920; y=325},
    @{x=1000; y=230},
    @{x=1080; y=94}
)

# Start and end points
$x0 = 200
$y0 = 678
$x3 = 1080
$y3 = 94

$bestErrVal = [double]::MaxValue
$bestCx1 = 0
$bestCy1 = 0
$bestCx2 = 0
$bestCy2 = 0

for ($cx1 = 300; $cx1 -le 600; $cx1 += 20) {
    for ($cy1 = 500; $cy1 -le 700; $cy1 += 20) {
        for ($cx2 = 600; $cx2 -le 1000; $cx2 += 25) {
            for ($cy2 = 200; $cy2 -le 500; $cy2 += 25) {
                
                $errVal = 0.0
                foreach ($pt in $points) {
                    $targetX = $pt.x
                    $targetY = $pt.y
                    
                    $t = ($targetX - $x0) / ($x3 - $x0)
                    
                    $mt = 1 - $t
                    $bezierX = ($mt * $mt * $mt * $x0) + (3 * $mt * $mt * $t * $cx1) + (3 * $mt * $t * $t * $cx2) + ($t * $t * $t * $x3)
                    $bezierY = ($mt * $mt * $mt * $y0) + (3 * $mt * $mt * $t * $cy1) + (3 * $mt * $t * $t * $cy2) + ($t * $t * $t * $y3)
                    
                    $dx = $bezierX - $targetX
                    $dy = $bezierY - $targetY
                    $errVal += ($dx * $dx) + ($dy * $dy)
                }
                
                if ($errVal -lt $bestErrVal) {
                    $bestErrVal = $errVal
                    $bestCx1 = $cx1
                    $bestCy1 = $cy1
                    $bestCx2 = $cx2
                    $bestCy2 = $cy2
                }
            }
        }
    }
}

Write-Output "Best Error: $bestErrVal"
Write-Output "Path: M $x0 $y0 C $bestCx1 $bestCy1, $bestCx2 $bestCy2, $x3 $y3"
