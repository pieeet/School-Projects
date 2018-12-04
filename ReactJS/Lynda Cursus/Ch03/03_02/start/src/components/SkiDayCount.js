import "../stylesheets/ui.scss"
import { MdTerrain } from "react-icons/md"
import { IoMdSnow } from "react-icons/io"
import { FaCalender } from "react-icons/fa"

const percentToDecimal = (decimal) => {
    return ((decimal * 100) + '%')
}

const calcGoalProgress = (total, goal) => {
    return percentToDecimal(total / goal)
}

export const SkiDayCount = ({total, powder, backcountry, goal}) => (
            <div className="ski-day-count">
                <div className="total-days">
                    <span>{total}</span>
                        <FaCalender/>
                    <span>days</span>
                </div>
                <div className="powder-days">
                    <span>{powder}</span>
                        <IoMdSnow/>
                    <span>days</span>
                </div>
                <div className="backcountry-days">
                    <span>{backcountry}</span>
                        <MdTerrain/>
                    <span>days</span>
                </div>
                <div>
                    <span>{calcGoalProgress(total, goal)}</span>
                </div>
            </div>
)