import React from "react";
import "../css/chart.css";
import HighlightOffRoundedIcon from "@material-ui/icons/HighlightOffRounded";
import CheckCircleOutlineRoundedIcon from "@material-ui/icons/CheckCircleOutlineRounded";

function Chart() {
  return (
    <div className="chart">
      <div className="chart_section">
        <table className="chart_table">
          <tbody>
            <tr>
              <td>Centralized items</td>
              <td className="chart_logo">
                <CheckCircleOutlineRoundedIcon color="primary" />
              </td>
              <td className="chart_logo">
                <CheckCircleOutlineRoundedIcon color="primary" />
              </td>
              <td className="chart_logo">
                <CheckCircleOutlineRoundedIcon color="primary" />
              </td>
            </tr>
            <tr>
              <td>Version history</td>
              <td className="chart_logo">
                <CheckCircleOutlineRoundedIcon color="primary" />
              </td>
              <td className="chart_logo">
                <CheckCircleOutlineRoundedIcon color="primary" />
              </td>
              <td className="chart_logo">
                <CheckCircleOutlineRoundedIcon color="primary" />
              </td>
            </tr>
            <tr>
              <td>Plugin administration</td>
              <td className="chart_logo">
                <CheckCircleOutlineRoundedIcon color="primary" />
              </td>
              <td className="chart_logo">
                <CheckCircleOutlineRoundedIcon color="primary" />
              </td>
              <td className="chart_logo">
                <CheckCircleOutlineRoundedIcon color="primary" />
              </td>
            </tr>
            <tr>
              <td>Facebook & Instragam Ads</td>
              <td className="chart_logo">
                <HighlightOffRoundedIcon color="secondary" />
              </td>
              <td className="chart_logo">
                <CheckCircleOutlineRoundedIcon color="primary" />
              </td>
              <td className="chart_logo">
                <CheckCircleOutlineRoundedIcon color="primary" />
              </td>
            </tr>
            <tr>
              <td>Design System Analysis</td>
              <td className="chart_logo">
                <HighlightOffRoundedIcon color="secondary" />
              </td>
              <td className="chart_logo">
                <HighlightOffRoundedIcon color="secondary" />
              </td>
              <td className="chart_logo">
                <CheckCircleOutlineRoundedIcon color="primary" />
              </td>
            </tr>
            <tr>
              <td>Unlimited cloud storage</td>
              <td className="chart_logo">
                <HighlightOffRoundedIcon color="secondary" />
              </td>
              <td className="chart_logo">
                <HighlightOffRoundedIcon color="secondary" />
              </td>
              <td className="chart_logo">
                <CheckCircleOutlineRoundedIcon color="primary" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Chart;
